<script>
    import {
        Hr,Checkbox, Heading, List, Li,
    } from 'flowbite-svelte';

    import TimerContainer from "./timerContainer.svelte";
    import TodoSelect from "$lib/components/todoList.svelte";
    import TimeSelect from "./timeSelect.svelte";
    let todoSelected = ""; // {id:1, title:""}
    let timeSelected = 0;
    import {setContext} from "svelte";
    import {writable} from "svelte/store";
    import {defaultSetKey,currentWorkKey} from './key.js';
    import Controller from "./Controller.svelte";


    const defaultTimerSet = writable({values:{
            working: 50,
            breaking: 10,
            repeat: 2, //todo 마지막에 breaking없음
            dayStartTime: "09:00",
            dayEndTime: "24:00"
        }, errors:{}});
    //todo: default는 바뀌면 안되는데 리더블이나 컨텍스트만 쓰는걸로 바꿀까? -> 나중에 setting창에서 바꿀 수 있긴함.
    setContext(defaultSetKey,defaultTimerSet);

    const currentWork = writable({values:{
            todo:"",                    //선택한 toodo : todoSelect에서 선택한 todo의 title을 받아옴
            curGoalTime:0,        //뽀모 하나 단위: 디폴트값에서 timeSelect에서 선택한 시간을 더함

            startTime:0,            //toㅇdo 시작시간: Controller에서 재생버튼을 눌렀을 때 받아옴.
            date: 0,                   //toㅇdo 시작날짜
            goalEndTime:0,        //repeat시간을 포함한 목표 종료시간

            state:"IDLE",           // IDLE, WORKING, BREAKING, DONE
            isRunning:false,      // 타이머가 동작중인지 여부: Controller에서 재생버튼을 눌렀을 때만 true
            repeated:0,             // 몇번의 뽀모가 지났는지.

            endTime:0,              // toodo가 끝난시간.
        },
        functions:{
            addTime:(initHours,initMinutes, addMinutes)=>{
                const newFullMinutes = initHours*60 + initMinutes + addMinutes;
                let hours = Math.floor(newFullMinutes/60);
                let minutes = Math.floor(newFullMinutes%60)
                let ampm = hours >= 12 ? 'PM' : 'AM';
                return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${ampm}`;
            },
            reset:()=>{
                $currentWork.values.todo = "";
                $currentWork.values.curGoalTime = 0;
                $currentWork.values.startTime = 0;
                $currentWork.values.date = 0;
                $currentWork.values.goalEndTime = 0;
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

    import {currentTime} from '$lib/stores/clock.js';

    $:{
        if($currentWork.values.state == "IDLE"){
            $currentWork.values.todo = todoSelected.title;
            $currentWork.values.curGoalTime = $defaultTimerSet.values.working + timeSelected;
            const goalMinutes = $defaultTimerSet.values.repeat * ($currentWork.values.curGoalTime + $defaultTimerSet.values.breaking);
            $currentWork.values.goalEndTime = $currentWork.functions.addTime($currentTime.hours,$currentTime.minutes, goalMinutes);
        }
    }

    function handlerStartTimer(e){
        e.preventDefault();
        if($currentWork.values.state == "IDLE"){
            $currentWork.values.startTime = e.detail.startTime;
            $currentWork.values.date = e.detail.date;
        }
        $currentWork.values.isRunning = true;
        $currentWork.values.state = "WORKING";
    }

    function handlerStopTimer(e){
        e.preventDefault();
        $currentWork.values.isRunning = false;
        $currentWork.values.state = "WORKING";
    }

    function handlerNextTimer(e) {
        e.preventDefault();
        $currentWork.values.isRunning = false;

        if ($currentWork.values.state == "BREAKING") {
            $currentWork.values.state = "WORKING";
            $currentWork.values.repeated += 1;
        } else if ($currentWork.values.state == "WORKING") {
            $currentWork.values.state = "DONE";
            $currentWork.values.endTime = e.detail.endTime;
        }else if($currentWork.values.state == "DONE"){
            //todo: 상태가 done이었다면, 어느정도 시간이 지난 후에 reset해야는데 어떤 설정할지 못정하겠어서 한번 더 누르면 reset되도록..
            $currentWork.functions.reset();
        }
    }

    function handlerResetTimer(e){
        e.preventDefault();
        $currentWork.functions.reset();
    }
</script>

<div class=" flex-col justify-center items-center space-y-4 m-6 w-[540px]">
<!--    <pre>{JSON.stringify($currentWork, null,2)}</pre>-->

    <!-- 타이머 -->
    <Hr  width="w-full" height="h-1">
        <div class="text-xl font-semibold text-gray-900 dark:text-white px-4">Too -> do</div>
    </Hr>
    <div class="flex justify-center items-center relative h-[380px] w-full space-x-5">
        <div class="flex-col w-[210px] h-[380px]">
            <TodoSelect bind:todoSelected />
            <TimeSelect bind:timeSelected/>
        </div>
        <TimerContainer/>
    </div>
    <Controller
            on:start = {handlerStartTimer}
            on:stop = {handlerStopTimer}
            on:next = {handlerNextTimer}
            on:reset = {handlerResetTimer}
    />
</div>




