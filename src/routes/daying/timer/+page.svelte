<script>
    import { tick } from 'svelte';
    import {
        Hr,
    } from 'flowbite-svelte';

    import TodoSelect from "$lib/components/todoList.svelte";
    import TimeSelect from "./timeSelect.svelte";
    import TimerSession from "./timerSession.svelte"
    import TimerGoal from "./timerForGoal.svelte";
    import Controller from "./Controller.svelte";
    import {setContext} from "svelte";
    import {writable} from "svelte/store";
    import {defaultSetKey,currentWorkKey} from './key.js';
    import {currentTime} from '$lib/stores/clock.js';
    import TimerHour from "./timerForHour.svelte";
    import ClockDesign from "$lib/components/clock-design.svelte";


    const defaultTimerSet = writable({values:{
            working: 10,
            breaking: 5,
            repeat: 2, //todo 마지막에 breaking없음

            //todo: 얘넨 전체적인 환경설정이라 나중에 빼야함. -> setting페이지 에서 바꿀 수 있도록
            dayStartTime: "09:00",
            dayEndTime: "24:00"
        }, errors:{}});
    //todo: default는 바뀌면 안되는데 리더블이나 컨텍스트만 쓰는걸로 바꿀까? -> 나중에 setting창에서 바꿀 수 있긴함.
    setContext(defaultSetKey,defaultTimerSet);

    const currentWork = writable({values:{
            todo:"",                    //선택한 toodo : todoSelect에서 선택한 todo의 title을 받아옴
            curGoalTime:0,        //뽀모 하나 단위: 디폴트값에서 timeSelect에서 선택한 시간을 더함

            startTime:"",            //toㅇdo 시작시간: Controller에서 재생버튼을 눌렀을 때 받아옴.
            date: "",                   //toㅇdo 시작날짜
            goalEndTime:"",        //repeat시간을 포함한 목표 종료시간

            state:"IDLE",           // IDLE, WORKING, BREAKING, DONE
            isRunning:false,      // 타이머가 동작중인지 여부: Controller에서 재생버튼을 눌렀을 때만 true
            repeated:0,             // 몇번의 뽀모가 지났는지.

            endTime:"",              // toodo가 끝난시간.
            studyTime:0,           // 실제 공부한 시간.
        },
        functions:{
            diffTime:(initHours,initMinutes, diffDate)=>{
                const diffMinutes = stringDateToNumMinutes(diffDate);
                const fullOriginalMinutes = initHours*60 + initMinutes;
                return Math.abs(fullOriginalMinutes - diffMinutes);
            },
            addMinutes:(initHours,initMinutes, addMinutes)=>{
                const newFullMinutes = initHours*60 + initMinutes + addMinutes;
                let hours = Math.floor(newFullMinutes/60);
                let minutes = Math.floor(newFullMinutes%60);
                let ampm = hours >= 12 ? 'PM' : 'AM';
                return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${ampm}`;
            },
            resetCurrentWork:()=>{
                $currentWork.values.todo = "";
                $currentWork.values.curGoalTime = $defaultTimerSet.values.working;
                $currentWork.values.startTime = 0;
                $currentWork.values.date = 0;
                const goalMinutes = $defaultTimerSet.values.repeat * ($currentWork.values.curGoalTime + $defaultTimerSet.values.breaking);
                $currentWork.values.goalEndTime = $currentWork.functions.addMinutes($currentTime.hours,$currentTime.minutes, goalMinutes);
                $currentWork.values.state = "IDLE";
                $currentWork.values.isRunning = false;
                $currentWork.values.repeated = 0;
                $currentWork.values.endTime = 0;
            }
        },
        errors:{

        },
    });
    setContext(currentWorkKey,currentWork);

    ///////////////////// timer ///////////////////////
    import Timer from "./timer.svelte";

    let todoSelected = ""; // {id:1, title:""}
    let timeSelected = 0;
    let timeLeft = 0;
    let timeDone = 0;
    let interval = null;
    let buttonDisable = false; //state가 DONE이 되면 재생버튼이 눌리면 안됨. (next버튼을 한번 더 눌러야 다음 work 가능함. )


    function handlerStartTimer(e){
        if(e){
            e.preventDefault();
            if($currentWork.values.state == "IDLE"){
                $currentWork.values.startTime = e.detail.startTime;
                $currentWork.values.date = e.detail.date;
                timeLeft = $currentWork.values.curGoalTime;
                $currentWork.values.state = "WORKING";
            }
        }

        // $currentWork.values.state = "WORKING";
        interval = setInterval(()=>{
            timeLeft --;
            timeDone ++;
            if(timeLeft === 0){
                clearInterval(interval);
                console.log(`repeated time: ${$currentWork.values.repeated}`);
                if($currentWork.values.repeated !== $defaultTimerSet.values.repeat){
                    if($currentWork.values.state != 'BREAKING') {
                        $currentWork.values.repeated ++;
                        $currentWork.values.state = "BREAKING";
                        timeLeft = $defaultTimerSet.values.breaking;
                        timeDone = 0;
                        handlerStartTimer();
                    }else {
                        $currentWork.values.state = "WORKING";
                        timeLeft = $currentWork.values.curGoalTime;
                        timeDone = 0;
                        handlerStartTimer();
                    }
                }else{
                    stateDONE($currentTime.shortTime);
                }
            }
        },150);
    }


    function handlerStopTimer(e){
        if(e){
            e.preventDefault();
            clearInterval(interval);
            $currentWork.values.state = "WORKING";
        }
    }

    function handlerNextTimer(e) {
        if(e){
            e.preventDefault();
            clearInterval(interval);

            if ($currentWork.values.state == "BREAKING") {
                //breaking상태였다면, breaking구간을 건너뛰고 working으로 전환.
                if($currentWork.values.repeated == $defaultTimerSet.values.repeat){
                    //타이머가 실제로 반복한 뽀모 수와, 목표 뽀모 수가 같다면 자동으로 DONE으로 바꿈.
                    stateDONE(e.detail.endTime);
                }else{
                    $currentWork.values.state = "WORKING";
                }
            }
            else if ($currentWork.values.state == "WORKING") {
                stateDONE(e.detail.endTime);
            }
            else {
                //todo: 상태가 done이었다면, 어느정도 시간이 지난 후에 reset해야는데 어떤 설정할지 못정하겠어서 한번 더 누르면 reset되도록..
                $currentWork.values.state = "IDLE";
                resetPageVariables();
                $currentWork.functions.resetCurrentWork();
                //todo: 배열 todayStudy에 추가.
            }
        }

    }
    function stateDONE(endTime){
        $currentWork.values.state = "DONE";
        buttonDisable = true;
        $currentWork.values.endTime = endTime;
        $currentWork.values.studyTime = $currentWork.functions.diffTime($currentTime.hours,$currentTime.minutes, $currentWork.values.startTime);
    }

    function handlerResetTimer(e){
        if(e) e.preventDefault();
        clearInterval(interval);
        $currentWork.values.state = "IDLE";
        resetPageVariables();
        $currentWork.functions.resetCurrentWork();
    }

    ///////////////////// page function ///////////////////////
    function resetPageVariables(){
        todoSelected = "";
        timeSelected = 0;
        timeLeft = 0;
        timeDone = 0;
        buttonDisable = false;
    }

    function stringDateToNumMinutes(stringDate){ //todo: 얘 currentWork.functions로 옮기고, diffTime에서 쓰게하고싶은데..ㅠ
        const [hours, temp] = stringDate.split(":");
        const[minutes, ampm] = temp.split(" ");
        return Number(hours)*60 + Number(minutes);
    }

    ///////////////////// timer design  ///////////////////////
    const classGoal = "relative w-full flex top-2 scale-[65%]";
    const classHour = "absolute top-4 scale-[91%]";

    $:{
        if ($currentWork.values.state == "IDLE") {
            $currentWork.values.todo = todoSelected.title;
            $currentWork.values.curGoalTime = $defaultTimerSet.values.working + timeSelected;
            const goalMinutes = $defaultTimerSet.values.repeat * ($currentWork.values.curGoalTime + $defaultTimerSet.values.breaking);
            $currentWork.values.goalEndTime = $currentWork.functions.addMinutes($currentTime.hours,$currentTime.minutes, goalMinutes);
        }
    }
    // $:console.log(`timeLeft in page : ${timeLeft}`)
</script>

<div class=" flex-col justify-center items-center space-y-4 m-6 w-[540px]">
<!--    <pre>{JSON.stringify($currentWork, null,2)}</pre>-->

    <Hr  width="w-full" height="h-1">
        <div class="text-xl font-semibold text-gray-900 dark:text-white px-4">Too -> do</div>
    </Hr>
    <div class="flex justify-center items-center relative h-[380px] w-full space-x-5">
        <div class="flex-col w-[210px] h-[380px]">
            <TodoSelect bind:todoSelected />
            <TimeSelect bind:timeSelected/>
        </div>
        <div class="timer relative  w-[300px] items-center justify-center h-[380px] top-2">
<!--            <TimerGoal/>-->
            <Timer
                    classTimer = {classGoal}
                    {timeLeft}
                    {timeDone}
                    state = {$currentWork.values.state}
                    mode = "goalTimer"
            />
            <Timer
                    classTimer = {classHour}
                    {timeLeft}
                    {timeDone}
                    state = {$currentWork.values.state}
                    mode = "hourTimer"
            />
            <ClockDesign />

            <TimerSession/>
        </div>
    </div>
    <Controller
            {buttonDisable}
            on:start = {handlerStartTimer}
            on:stop = {handlerStopTimer}
            on:next = {handlerNextTimer}
            on:reset = {handlerResetTimer}
    />
</div>


<style lang="scss">
  .timer {
    color: rgb(50, 50, 50);
    width: 300px;
    height: 380px;
    padding: 10px 0;
    border-radius: 20%;
    border: 10px solid rgb(55, 55, 55);
    box-shadow: inset 0 0 3px 3px rgba(50, 50, 50, 0.3), inset 0 0 1px 2px rgba(50, 50, 50, 0.2);
    //margin: 20px;
  }
</style>

