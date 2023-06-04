<script>
    import { tick } from 'svelte';
    import {
        Hr,
    } from 'flowbite-svelte';

    import TodoSelect from "$lib/components/todoList.svelte";
    import TimeSelect from "./timeSelect.svelte";
    import TimerState from "./timerStateDisplay.svelte"
    import Controller from "./Controller.svelte";
    import {setContext} from "svelte";
    import {writable} from "svelte/store";
    import {currentWorkKey} from './key.js';
    import {currentTime} from '$lib/stores/clock.js';
    import ClockDesign from "$lib/components/clock-design.svelte";
    import { Button, Modal } from 'flowbite-svelte'
    let clickOutsideModal = false;
    import {defaultTimerSet} from "$lib/stores/defaultSet.js";


    const currentWork = writable({values:{
            todo:"",                    //선택한 toodo : todoSelect에서 선택한 todo의 title을 받아옴
            curGoalTime:0,        //뽀모 하나 단위: 디폴트값에서 timeSelect에서 선택한 시간을 더함

            startTime:"",            //toㅇdo 시작시간: Controller에서 재생버튼을 눌렀을 때 받아옴.
            date: "",                   //toㅇdo 시작날짜
            goalEndTime:"",        //repeat시간을 포함한 목표 종료시간

            state:"IDLE",           // IDLE, WORKING, BREAKING, DONE
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
                $currentWork.values.repeated = 0;
                $currentWork.values.endTime = 0;
            }
        },
        errors:{

        },
    });
    setContext(currentWorkKey,currentWork);

    ////////////////////////////// alarm setting //////////////////////////////
    let alarmSound = null;
    function playAlarm(){
        if(alarmSound === null){
            alarmSound = new Audio('https://freesound.org/data/previews/80/80921_1022651-lq.mp3');
        }
        alarmSound.play();
    }
    ///////////////////// timer ///////////////////////
    import Timer from "./timer.svelte";
    import Memo from "../memo/+page.svelte";

    let todoSelected = ""; // {id:1, title:""}
    let timeSelected = 0;
    let timeLeft = $currentWork.values.curGoalTime *60 ;
    let timeDone = 0;
    let isRunning = false;
    let interval = null;

    // $:console.log(`timeLeft in page : ${timeLeft}`)

    function handlerStartTimer(e){
        isRunning = true;
        if(e){
            e.preventDefault();
            if($currentWork.values.state == "IDLE"){
                $currentWork.values.startTime = e.detail.startTime;
                $currentWork.values.date = e.detail.date;
                timeLeft = $currentWork.values.curGoalTime *60;
                $currentWork.values.state = "WORKING";
            }
        }

        // $currentWork.values.state = "WORKING";
        interval = setInterval(()=>{
            timeLeft --;
            timeDone ++;
            if(timeLeft <= 0){
                clearInterval(interval);
                if($currentWork.values.state != 'BREAKING') {
                    $currentWork.values.repeated++;
                    if($currentWork.values.repeated === $defaultTimerSet.values.repeat){
                        // console.log("DONE")
                        stateDONE($currentTime.shortTime);
                        return;
                    }
                    $currentWork.values.state = "BREAKING";
                    playAlarm();

                    timeLeft = $defaultTimerSet.values.breaking *60;
                    timeDone = 0;
                    handlerStartTimer();
                }else {
                    $currentWork.values.state = "WORKING";
                    playAlarm();

                    timeLeft = $currentWork.values.curGoalTime *60;
                    timeDone = 0;
                    handlerStartTimer();
                }
            }
        },50);
        // console.log(`repeated time: ${$currentWork.values.repeated}`);
    }


    function handlerStopTimer(e){
        if(e){
            e.preventDefault();
        }
        isRunning = false;
        clearInterval(interval);
        $currentWork.values.state = "WORKING";
    }

    function handlerNextTimer(e) {
        if(e){
            e.preventDefault();
        }
        clearInterval(interval);
        isRunning = false;

        if ($currentWork.values.state == "BREAKING") {
            //breaking상태였다면, breaking구간을 건너뛰고 working으로 전환.
            if($currentWork.values.repeated == $defaultTimerSet.values.repeat){
                //타이머가 실제로 반복한 뽀모 수와, 목표 뽀모 수가 같다면 자동으로 DONE으로 바꿈.
                stateDONE(e.detail.endTime);
            }else{
                $currentWork.values.state = "WORKING";
                timeLeft = $currentWork.values.curGoalTime *60;
                handlerStartTimer();
            }
        }
        else {
            stateDONE(e.detail.endTime);
            //todo: 상태가 done이었다면, 어느정도 시간이 지난 후에 reset해야는데 어떤 설정할지 못정하겠어서 한번 더 누르면 reset되도록..
        }

    }
    function stateDONE(endTime){
        playAlarm();
        clickOutsideModal = true; //끝났음을 알리는 model등장!
        // $currentWork.values.state = "DONE";
        $currentWork.values.endTime = endTime;
        $currentWork.values.studyTime = $currentWork.functions.diffTime($currentTime.hours,$currentTime.minutes, $currentWork.values.startTime);
        //todo: 배열 todayStudy에 추가.
        handlerResetTimer();
    }

    function handlerResetTimer(e){
        if(e) e.preventDefault();
        clearInterval(interval);
        isRunning = false;

        $currentWork.values.state = "IDLE";
        resetPageVariables();
        $currentWork.functions.resetCurrentWork();
    }

    ///////////////////// page function ///////////////////////
    function resetPageVariables(){
        todoSelected = "";
        timeSelected = 0;
        timeLeft = $currentWork.values.curGoalTime *60;
        timeDone = 0;
        isRunning = false;
    }

    function stringDateToNumMinutes(stringDate){ //todo: 얘 currentWork.functions로 옮기고, diffTime에서 쓰게하고싶은데..ㅠ
        const [hours, temp] = stringDate.split(":");
        const[minutes, ampm] = temp.split(" ");
        return Number(hours)*60 + Number(minutes);
    }

    function controlInTimer(){
        if( $currentWork.values.state === "WORKING"|| $currentWork.values.state === "BREAKING"){
            if(isRunning) handlerStopTimer();
            else handlerStartTimer();
        }
    }

    $:{
        if ($currentWork.values.state == "IDLE") {
            $currentWork.values.todo = todoSelected.title;
            $currentWork.values.curGoalTime = $defaultTimerSet.values.working + timeSelected;
            const goalMinutes = $defaultTimerSet.values.repeat * ($currentWork.values.curGoalTime + $defaultTimerSet.values.breaking);
            $currentWork.values.goalEndTime = $currentWork.functions.addMinutes($currentTime.hours,$currentTime.minutes, goalMinutes);
        }
    }
    ///////////////////// timer design  ///////////////////////
    const classGoal = "absolute w-[calc(100%-3rem)]  scale-[94%] ";
    const classHour = "absolute w-[calc(100%-3rem)]  scale-[60%]";
    const classClock = "relative w-[calc(100%-3rem)]  indent-0.5";

</script>

<div class=" relative  flex-col h-full w-full border-4 border-double rounded-lg">
<!--    <pre>{JSON.stringify($currentWork, null,2)}</pre>-->

    <div class=" w-full h-2/3 flex-col  p-4 max-h-[820px]">

        <Hr  width="w-full" height="h-2" class="">
            <p class="text-[1.7rem] font-bold"> {$currentWork.values.todo? $currentWork.values.todo:"Select Todo!" }</p>
        </Hr>

        <div class="w-full flex justify-center items-center h-full space-x-4 relative mt-2">
            <div class="flex-col w-2/5 h-full relative m-2">
                <TodoSelect bind:todoSelected />
                <TimeSelect bind:timeSelected/>
            </div>

            <div class="relative timerBox w-3/5 flex justify-center items-center h-[calc(100%-2rem)]">
                <Timer
                        designTimer = {classGoal}
                        {timeLeft}
                        {timeDone}
                        state = {$currentWork.values.state}
                        mode = "goalTimer"
                />
                <Timer
                        designTimer = {classHour}
                        {timeLeft}
                        {timeDone}
                        state = {$currentWork.values.state}
                        mode = "hourTimer"
                />
                <ClockDesign
                        designTimer={classClock}
                />

                <div class="h-[18%] w-1/2 absolute indent-0.5">
                    <TimerState
                            {timeLeft}
                            state = {$currentWork.values.state}
                            {controlInTimer}
                    />
                </div>

                <div class="flex-col mb-1 text-lg font-semibold absolute bg-white  p-2 rounded-lg text-center bottom-2.5 opacity-80">
                    <div class="text-[1.1vw] ">
                        <span class="text-pink-800 inline-block">
                            [{$currentWork.values.curGoalTime} min * {$defaultTimerSet.values.repeat}]
                        </span>

                        {#if $currentWork.values.state == "WORKING"}
                            <div class="bg-white inline-block rounded-md px-2">
                                {$currentWork.values.startTime}
                            </div>
                            - {$currentWork.functions.addMinutes($currentTime.hours,$currentTime.minutes,$currentWork.values.curGoalTime)}
                        {:else }
                            <div class="bg-white inline-block rounded-md px-2">
                                {$currentTime.shortTime}
                            </div>
                            - {$currentWork.values.goalEndTime}
                        {/if}
                    </div>
                </div>
            </div>
        </div>

    </div>

    <Controller
            {isRunning}
            state = {$currentWork.values.state}
            on:start = {handlerStartTimer}
            on:stop = {handlerStopTimer}
            on:next = {handlerNextTimer}
            on:reset = {handlerResetTimer}
    />

    <div class="absolute bottom-0 w-full h-1/4">
        <Memo/>
    </div>
</div>

<Modal title="DONE !" bind:open={clickOutsideModal} autoclose outsideclose class="flex-col w-1/3">
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
        goal time: {$currentWork.values.goalEndTime}
    </p>
    <svelte:fragment slot='footer'>
        finish time: {$currentTime.shortTime}
<!--        <Button color="alternative" class="self-center">Close</Button>-->
    </svelte:fragment>
</Modal>


<style lang="scss">
  .timerBox {
    border-radius: 20%;
    border: 14px solid rgb(55, 55, 55);
    box-shadow: inset 0 0 3px 3px rgba(50, 50, 50, 0.3), inset 0 0 1px 2px rgba(50, 50, 50, 0.2);
  }
</style>

