<script>
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

    const defaultSetStore = getContext(defaultSetKey);
    const currentWorkStore = getContext(currentWorkKey);

    $: selectedTodo = $currentWorkStore.values.todo;
    $: goalTime = $currentWorkStore.values.goalTime;
    $:isRunning = $currentWorkStore.values.isRunning;

    import {currentTime} from '$lib/stores/clock.js';
    $:shortTime=$currentTime.shortTime;
    let hours = 0;
    let minutes = 0;
    let ampm = "";
    $:{ // calculate goal end time from (current time + goal time)
        const newFullMinutes = $currentTime.hours*60 + $currentTime.minutes + goalTime;
        hours = Math.floor(newFullMinutes/60);
        minutes = Math.floor(newFullMinutes%60)
        ampm = hours >= 12 ? 'PM' : 'AM';
    }
    $:goalEndTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${ampm}`;

    ////////////////////  timer control functions   ////////////////////
    let isRunning = true;
    function resetTimer(){

    }
    function startTimer(){
        isRunning = true;
    }
    function stopTimer(){
        isRunning = false;
    }
    function nextTimer() {
        isRunning = false;
    }
</script>

<div class="relative flex-col border-4 border-dashed rounded-lg p-4  ">
<!--        <pre>{JSON.stringify({timeLeft}, null,2) }</pre>-->
    <div class="flex justify-between">
        <div class="text-2xl font-bold mb-1">{selectedTodo? selectedTodo:"Select Todo" }</div>
        <Icon icon={fullscreen2Line} width="30"/>
    </div>
    <div class="flex justify-between">
        <div class="mb-1 text-lg font-medium dark:text-white">goal: <span class="text-pink-800">[{goalTime} min]</span>
            {#if isRunning}
                {$currentWorkStore.values.startTime} - {$currentWorkStore.values.endTime}
            {:else }
                {shortTime} - {goalEndTime}
            {/if}
        </div>
        <div class="mb-1 text-lg font-medium dark:text-white"> <span class="text-pink-800"> {shortTime} </span></div>
    </div>
    <Progressbar progress="10" size="h-5" class="my-3 font-bold "/>


    <div class="w-[540px] flex justify-start">
        <Toolbar class="w-[500px] !justify-center">

            <ToolbarButton  on:click={resetTimer}><Icon icon={skipForwardFill} hFlip={true} width="28" /></ToolbarButton>
            {#if isRunning}
                <ToolbarButton on:click={stopTimer} ><Icon icon={pauseFill} width="28" /></ToolbarButton>
            {:else}
                <ToolbarButton on:click={startTimer} ><Icon icon={playFill} width="28"  /></ToolbarButton>
            {/if}
            <ToolbarButton on:click={nextTimer}><Icon icon={skipForwardFill} width="28" /></ToolbarButton>

            <ToolbarButton class="absolute right-5" color="blue">
                <Icon icon={settings6Line} width="26"/>
            </ToolbarButton>
        </Toolbar>
    </div>
</div>
