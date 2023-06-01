<script>
    import {createEventDispatcher} from "svelte";

    ////////////////////   import design components   ////////////////////

    import {Toolbar, ToolbarButton, Progressbar} from "flowbite-svelte";

    import Icon from '@iconify/svelte';
    import playFill from '@iconify/icons-mingcute/play-fill';
    import skipForwardFill from '@iconify/icons-mingcute/skip-forward-fill';
    import pauseFill from '@iconify/icons-mingcute/pause-fill';
    import settings6Line from '@iconify/icons-mingcute/settings-6-line';
    import fullscreen2Line from '@iconify/icons-mingcute/fullscreen-2-line';
    import fullscreenExit2Line from '@iconify/icons-mingcute/fullscreen-exit-2-line';

    ////////////////////   import stores   ////////////////////
    import {getContext} from "svelte";
    import {currentWorkKey, defaultSetKey} from './key.js';

    const defaultTimerSetStore = getContext(defaultSetKey);
    const currentWorkStore = getContext(currentWorkKey);

    $: selectedTodo = $currentWorkStore.values.todo;
    $: curGoalTime = $currentWorkStore.values.curGoalTime;

    ////////////////////  timer control functions   ////////////////////
    import {currentTime} from '$lib/stores/clock.js';
    const dispatch = createEventDispatcher();
    let isRunning = false;
    function handleResetTimer(){
        isRunning = false;
        const isCancelled = dispatch("reset");
    }
    function handleStartTimer(){
        isRunning = true;
        const state = {
            startTime: $currentTime.shortTime,
            date: $currentTime.shortDate,
        }
        const isCancelled = dispatch("start", state,{
            cancelable: true,
        });
    }
    function handleStopTimer(){
        isRunning = false;
        const isCancelled = dispatch("stop");
    }
    function handleNextTimer() {
        isRunning = false;
        const state = {
            endTime: $currentTime.shortTime,
        }
        const isCancelled = dispatch("next", state,{
            cancelable: true,
        });
    }

    ////////////////////  design?   ////////////////////
    //TODO: overflow가 발생하면 movingText를 적용하게 하고싶은데 어케할지 모르겠음.
    $: isOverflow = ()=>{
        return false;
    }
</script>

<div class="relative w-[540px] -bottom-2 flex-col border-4 border-dashed rounded-lg p-4  ">
    <div class="flex justify-between relative">
        <div class="text-2xl font-bold mb-1 max-h-[32px] max-w-[430px] w-full overflow-x-scroll mr-3 relative">
            <div class="w-screen" class:movingText={isOverflow()} >
                {selectedTodo? selectedTodo:"Select Todo" }
            </div>
        </div>
        <Icon class="absolute right-0 top-0" icon={fullscreen2Line} width="30"/>
    </div>
    <div class="flex justify-between">
        <div class="mb-1 text-lg font-medium dark:text-white">goal: <span class="text-pink-800">
            [{curGoalTime} min * {$defaultTimerSetStore.values.repeat}]
        </span>
            {#if $currentWorkStore.values.state == "WORKING"}
                {$currentWorkStore.values.startTime} -
                {$currentWorkStore.functions.addTime($currentTime.hours,$currentTime.minutes,$currentWorkStore.values.curGoalTime)}
            {:else }
                {$currentTime.shortTime} - {$currentWorkStore.values.goalEndTime}
            {/if}
        </div>
        <div class="mb-1 text-lg font-medium dark:text-white">
            {#if $currentWorkStore.values.state == "DONE"}
                <span class="text-pink-800">  FINISH !</span>
                {$currentTime.shortTime}
            {/if}
        </div>
    </div>

    <div class="flex-col relative mb-6">
        <Progressbar progress="10" size="h-5" class="my-3 font-bold "/>
        <div class="flex justify-between absolute top-6 w-full">
            <div class="mb-1 text-xs font-medium dark:text-white absolute left-0">{$defaultTimerSetStore.values.dayStartTime}</div>
            <div class="mb-1 text-xs font-medium dark:text-white absolute right-0">{$defaultTimerSetStore.values.dayEndTime}</div>
        </div>
    </div>

    <div class="w-[540px] flex justify-start">
        <Toolbar class="w-[500px] !justify-center">

            <ToolbarButton  on:click={handleResetTimer}><Icon icon={skipForwardFill} hFlip={true} width="28" /></ToolbarButton>
            {#if isRunning}
                <ToolbarButton on:click={handleStopTimer} ><Icon icon={pauseFill} width="28" /></ToolbarButton>
            {:else}
                <ToolbarButton on:click={handleStartTimer} ><Icon icon={playFill} width="28"  /></ToolbarButton>
            {/if}
            <ToolbarButton on:click={handleNextTimer}><Icon icon={skipForwardFill} width="28" /></ToolbarButton>

            <ToolbarButton class="absolute right-5" color="blue">
                <Icon icon={settings6Line} width="26"/>
            </ToolbarButton>
        </Toolbar>
    </div>
</div>


<style>
    .movingText {
        animation: move 10s linear infinite;
    }

    @keyframes move {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-100%);
        }
    }
</style>
