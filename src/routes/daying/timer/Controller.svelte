<script>
    import {Toolbar, ToolbarButton, Progressbar} from "flowbite-svelte";

    import Icon from '@iconify/svelte';
    import playFill from '@iconify/icons-mingcute/play-fill';
    import stopFill from '@iconify/icons-mingcute/stop-fill';
    import skipForwardFill from '@iconify/icons-mingcute/skip-forward-fill';
    import deleteBackFill from '@iconify/icons-mingcute/delete-back-fill';
    import pauseFill from '@iconify/icons-mingcute/pause-fill';
    import repeatRounded from '@iconify/icons-material-symbols/repeat-rounded';
    import settings6Line from '@iconify/icons-mingcute/settings-6-line';
    import fullscreen2Line from '@iconify/icons-mingcute/fullscreen-2-line';
    import fullscreenExit2Line from '@iconify/icons-mingcute/fullscreen-exit-2-line';


    import {currentTime} from '$lib/stores/clock.js';
    $:shortTime=$currentTime.shortTime;
    export let selectedTodo = "selected todo";

    let timeLeft = 50;
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
        timeLeft = 50;
    }
</script>

<div class="relative flex-col border-4 border-dashed rounded-lg p-4 ">
<!--        <pre>{JSON.stringify({timeLeft}, null,2) }</pre>-->
    <div class="flex justify-between">
        <div class="text-2xl font-bold">{selectedTodo}</div>
        <Icon icon={fullscreen2Line} width="30"/>
    </div>
    <div class="flex justify-between">
        <div class="mb-1 text-lg font-medium dark:text-white">goal: {shortTime} - {shortTime} </div>
        <div class="mb-1 text-lg font-medium dark:text-white"> {shortTime} </div>
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
