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
            repeatStartTime:{
                hours:0,
                minutes:0,
            },

            endTime:"",              // toodo가 끝난시간.
            studyTime:0,           // 실제 공부한 시간.
        },
        functions:{
            diffTime:(initHours,initMinutes, diffTime)=>{
                const diffMinutes = stringTimeToNumMinutes(diffTime); //빼고싶은 입력시간을 분으로 변환
                const fullOriginalMinutes = (initHours%12)*60 + initMinutes;
                // console.log(`initHours : ${initHours}`)
                // console.log(`initMinutes : ${initMinutes}`)
                // console.log(`diffMinutes : ${diffMinutes}`)
                // console.log(`fullOriginalMinutes : ${fullOriginalMinutes}`)
                // console.log(`study time : ${Math.abs(fullOriginalMinutes - diffMinutes)}`)
                return Math.abs(fullOriginalMinutes - diffMinutes);
            },
            addMinutes:(initHours,initMinutes, addMinutes)=>{
                const newFullMinutes = initHours*60 + initMinutes + addMinutes;
                let hours = Math.floor(newFullMinutes/60);
                let minutes = Math.floor(newFullMinutes%60);
                let ampm = hours >= 12 ? 'PM' : 'AM';
                return `${(hours%12).toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${ampm}`;
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
                $currentWork.values.repeatStartTime={
                    hours:0,
                    minutes:0,
                };
                $currentWork.values.endTime = "";
                $currentWork.values.studyTime = 0;
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
    import Timer from "./pomodoro.svelte";
    import Memo from "../memo/+page.svelte";

    export let todoSelected = "";
    let timeSelected = 0;
    let timeLeft = $currentWork.values.curGoalTime *60 ;
    let timeDone = 0;
    let isRunning = false;
    let interval = null;
    let stopSecondsInterval = null;
    let stopSeconds = 0;

    // $:console.log(`timeLeft in page : ${timeLeft}`)

    function handlerStartTimer(e){
        isRunning = true;
        clearInterval(stopSecondsInterval);
        if(e){
            e.preventDefault();
            if($currentWork.values.state == "IDLE"){
                $currentWork.values.startTime = $currentTime.shortTime;
                $currentWork.values.repeatStartTime.hours = $currentTime.hours;
                $currentWork.values.repeatStartTime.minutes = $currentTime.minutes;
                $currentWork.values.date = $currentTime.shortDate;
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

                //설정한 반복횟수만큼 session 전환.
                if($currentWork.values.state != 'BREAKING') {
                    $currentWork.values.repeated++;
                    // 목표 반복횟수까지 도달했는지 확인. (마지막 반복에선 breaking하지 않음. )
                    if($currentWork.values.repeated === $defaultTimerSet.values.repeat){ //목표반복횟수가 일치하여 끝!
                        // console.log("DONE")
                        $currentWork.values.repeatStartTime.hours = $currentTime.hours;
                        $currentWork.values.repeatStartTime.minutes = $currentTime.minutes;
                        timerDone($currentTime.shortTime);
                        return;
                    }
                    //breaking session으로의 전환
                    $currentWork.values.state = "BREAKING";
                    playAlarm();
                    timeLeft = $defaultTimerSet.values.breaking *60;
                    timeDone = 0;
                    handlerStartTimer();
                }else {
                    //working session으로의 전환, 목표 종료시간 & 시작시간 업데이트.
                    $currentWork.values.state = "WORKING";
                    playAlarm();
                    $currentWork.values.repeatStartTime.hours = $currentTime.hours;
                    $currentWork.values.repeatStartTime.minutes = $currentTime.minutes;
                    timeLeft = $currentWork.values.curGoalTime *60;
                    timeDone = 0;
                    handlerStartTimer();
                }
            }
        },1000);
        // console.log(`repeated time: ${$currentWork.values.repeated}`);
    }


    function handlerStopTimer(e){
        if(e){
            e.preventDefault();
        }
        isRunning = false;
        clearInterval(interval);
        stopSecondsInterval = setInterval(()=>{
            stopSeconds ++;
        },1000);
        $currentWork.values.state = "WORKING";
    }

    function handlerNextTimer(e) {
        if(e){
            e.preventDefault();
        }
        clearInterval(interval);
        clearInterval(stopSecondsInterval);
        isRunning = false;

        if ($currentWork.values.state == "BREAKING") {
            //breaking상태였다면, breaking구간을 건너뛰고 working으로 전환.
            if($currentWork.values.repeated == $defaultTimerSet.values.repeat){
                //타이머가 실제로 반복한 뽀모 수와, 목표 뽀모 수가 같다면 자동으로 DONE으로 바꿈.
                timerDone(e.detail.endTime);
            }else{
                $currentWork.values.state = "WORKING";
                timeLeft = $currentWork.values.curGoalTime *60;
                handlerStartTimer();
            }
        }
        else {
            timerDone(e.detail.endTime);
            //todo: 상태가 done이었다면, 어느정도 시간이 지난 후에 reset해야는데 어떤 설정할지 못정하겠어서 한번 더 누르면 reset되도록..
        }
    }

    function handlerResetTimer(e){
        if(e) e.preventDefault();
        clearInterval(interval);
        clearInterval(stopSecondsInterval);
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
    function timerDone(endTime){
        playAlarm();
        clickOutsideModal = true; //끝났음을 알리는 model등장!
        // $currentWork.values.state = "DONE";
        $currentWork.values.endTime = endTime;
        const workingMinutes = $currentWork.values.repeated*$currentWork.values.curGoalTime;
        const lastWorkingMinutes = $currentWork.functions.diffTime($currentWork.values.repeatStartTime.hours, $currentWork.values.repeatStartTime.minutes , endTime);
        const stopMinutes = Math.floor(stopSeconds/60);
        // console.log(`workingMinutes: ${workingMinutes}, lastWorkingMinutes: ${lastWorkingMinutes}, stopMinutes: ${stopMinutes}`)
        $currentWork.values.studyTime =  workingMinutes + lastWorkingMinutes - stopMinutes;
        //todo: 배열 todayStudy에 추가.
        // console.log(`studyTime: ${$currentWork.values.studyTime}`)
    }
    function stringTimeToNumMinutes(stringTime){ //todo: 얘 currentWork.functions로 옮기고, diffTime에서 쓰게하고싶은데..ㅠ
        const [hours, temp] = stringTime.split(":");
        const[minutes, ampm] = temp.split(" ");
        // console.log(`end hours: ${hours}, minutes: ${minutes}`)
        return Number(hours)*60 + Number(minutes);
    }

    function controlInTimer(){
        if( $currentWork.values.state === "WORKING"|| $currentWork.values.state === "BREAKING"){
            if(isRunning) handlerStopTimer();
            else handlerStartTimer();
        }
    }
    function getTodos(todoSelected){
        let todos="";
        if(todoSelected){
            for(let i = 0; i<todoSelected.length; i++){
                if(i === todoSelected.length-1)
                    todos += todoSelected[i] + " ";
                else
                    todos += todoSelected[i] + ", ";
            }
            return todos;
        }else{
            return "Select todo!";
        }
    }

    $:{
        if ($currentWork.values.state == "IDLE") {
            $currentWork.values.todo = getTodos(todoSelected);
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

<div class=" relative flex-col h-full w-full ">
<!--    <pre>{JSON.stringify($currentWork, null,2)}</pre>-->

    <div class=" relative w-full h-2/3 flex-col  p-4 max-h-[790px]">
        <div class="h-[30px] w-full relative ">
            <Hr  width="w-full" height="h-2" >
                <p class="text-[1.6rem] line-clamp-2 font-bold w-auto max-w-[600px]"> {$currentWork.values.todo? $currentWork.values.todo:"Select Todo!" }</p>
            </Hr>
        </div>

        <div class="w-full flex justify-center items-center h-[calc(100%-60px)] space-x-4 relative mt-5">
            <div class="flex-col w-2/5 h-full relative min-w-[250px] ">
                <div class="w-full h-5/6 max-h-[calc(100%-90px)] ">
                    <TodoSelect bind:todoSelected />
                </div>
                <div class="w-full  h-1/6 min-h-[80px] max-h-[110px]">
                    <TimeSelect bind:timeSelected/>
                </div>
            </div>

            <div class="font-digital font-light relative top-1 timerBox w-3/5 flex justify-center items-center h-[calc(100%-0rem)]">
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
                        <span class="text-rose-700 inline-block">
                            [{$currentWork.values.curGoalTime} min * {$defaultTimerSet.values.repeat}]
                        </span>

                        {#if $currentWork.values.state == "WORKING"}
                            <div class="bg-white inline-block rounded-md px-2">
<!--                             repeat start time   -->
                                {($currentWork.values.repeatStartTime.hours%12).toString().padStart(2, '0')}:{$currentWork.values.repeatStartTime.minutes.toString().padStart(2, '0')}:{$currentWork.values.repeatStartTime.hours >= 12 ? 'PM' : 'AM'}
                            </div>
<!--                            repeat start time + goal time-->
                            - {$currentWork.functions.addMinutes($currentWork.values.repeatStartTime.hours,$currentWork.values.repeatStartTime.minutes,$currentWork.values.curGoalTime)}
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

        <Controller
                {isRunning}
                state = {$currentWork.values.state}
                on:start = {handlerStartTimer}
                on:stop = {handlerStopTimer}
                on:next = {handlerNextTimer}
                on:reset = {handlerResetTimer}
        />

    </div>

    <div class="relative top-[64px] w-full h-1/4">
        <Memo/>
    </div>
</div>

<Modal title="DONE !" bind:open={clickOutsideModal} permanent={true} autoclose outsideclose class="flex-col w-full h-full" >
    <p class="font-bold text-2xl text-center leading-relaxed text-gray-500 dark:text-gray-400">
        goal time: {$currentWork.values.goalEndTime} -> finish time: {$currentTime.shortTime}
    </p>
    <div on:click={handlerResetTimer} class="flex justify-between font-bold text-xl border-t pt-5">
        <div>study time: {$currentWork.values.studyTime}</div>
        <Button color="alternative" class="self-end text-xl font-bold" >Close</Button>
    </div>
</Modal>


<style lang="scss">
  .timerBox {
    border-radius: 16%;
    border: 13px solid rgb(55, 55, 55);
    box-shadow: inset 0 0 3px 3px #52525b, inset 0 0 1px 2px rgba(50, 50, 50, 0.2);
  }
</style>

