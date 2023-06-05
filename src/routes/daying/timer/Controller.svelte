<script>
    import {createEventDispatcher} from "svelte";

    ////////////////////   import design components   ////////////////////

    import {Toolbar, ToolbarButton, Progressbar, Modal, Button, Label, Input, Checkbox,Fileupload, Helper, Toggle} from "flowbite-svelte";

    import Icon from '@iconify/svelte';
    import playFill from '@iconify/icons-mingcute/play-fill';
    import skipForwardFill from '@iconify/icons-mingcute/skip-forward-fill';
    import pauseFill from '@iconify/icons-mingcute/pause-fill';
    import settings6Line from '@iconify/icons-mingcute/settings-6-line';
    import fullscreen2Line from '@iconify/icons-mingcute/fullscreen-2-line';
    import fullscreenExit2Line from '@iconify/icons-mingcute/fullscreen-exit-2-line';

    ////////////////////   import stores   ////////////////////
    import {getContext} from "svelte";
    import {currentWorkKey} from './key.js';

    const currentWorkStore = getContext(currentWorkKey);

    ////////////////////  timer control functions   ////////////////////
    import {currentTime} from '$lib/stores/clock.js';
    const dispatch = createEventDispatcher();
    export let isRunning;
    export let state;
    let settingDefaultModal = false;

    function handleResetTimer(){
        isRunning = false;
        const isCancelled = dispatch("reset");
    }
    function handleStartTimer(){
        const state = {
            startTime: $currentTime.shortTime,
            date: $currentTime.shortDate,
        }
        const isCancelled = dispatch("start", state,{
            cancelable: true,
        });
    }
    function handleStopTimer(){
        const isCancelled = dispatch("stop");
    }
    function handleNextTimer() {
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
    ////////////////////  button disable   ////////////////////
    let nextButtonDisable = true;
    $:{
        if(state === "IDLE")
            nextButtonDisable = true
        else
            nextButtonDisable = false
    }
</script>

<div class="w-full h-[60px] flex-col py-4 ">

<!--    <div class="flex-col relative mb-8  w-full">-->
<!--        <Progressbar progress="10" size="h-5" class="my-3 font-bold "/>-->
<!--        <div class="flex justify-between absolute top-6 w-full">-->
<!--            <div class="mb-1 text-xs font-medium dark:text-white absolute left-0">{$defaultTimerSetStore.values.dayStartTime}</div>-->
<!--            <div class="mb-1 text-xs font-medium dark:text-white absolute right-0">{$defaultTimerSetStore.values.dayEndTime}</div>-->
<!--        </div>-->
<!--    </div>-->

    <div class="w-full flex justify-start">
        <Toolbar class="w-full !justify-center relative">

            <ToolbarButton  on:click={handleResetTimer}><Icon icon={skipForwardFill} hFlip={true} width="28" /></ToolbarButton>
            {#if isRunning}
                <ToolbarButton on:click={handleStopTimer} ><Icon icon={pauseFill} width="28" /></ToolbarButton>
            {:else}
                <ToolbarButton on:click={handleStartTimer} ><Icon icon={playFill} width="28"  /></ToolbarButton>
            {/if}
            <ToolbarButton on:click={handleNextTimer} disabled={nextButtonDisable}><Icon icon={skipForwardFill} width="28" /></ToolbarButton>

            <ToolbarButton class="absolute right-5" color="blue"
                           on:click={() => settingDefaultModal = true}
            >
                <Icon icon={settings6Line} width="26"/>
            </ToolbarButton>
        </Toolbar>
    </div>
</div>

<Modal bind:open={settingDefaultModal} size="xs" autoclose class="w-full">
    <form class="flex flex-col space-y-6" action="#">
        <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Default Settings</h3>

        <div class="flex w-full justify-between space-x-2">
            <Label class="space-y-2 w-1/2">
                <span>하루 시작 시간</span>
                <Input type="time" name="day start time" placeholder="AM 07:00" required />
<!--                todo: 디폴트 설정...-->
            </Label>
            <Label class="space-y-2 w-1/2">
                <span>하루 끝 시간</span>
                <Input type="time" name="day end time" placeholder="PM 11:00" required />
            </Label>
        </div>


        <div class="flex w-full justify-between space-x-2">
            <Label class="space-y-2 w-1/4">
                <span>반복횟수</span>
                <Input type="number" name="repeat time" min="1" max="20" required />
            </Label>
            <div class="flex-col w-3/4">
                <Label class="space-y-2 w-full">
                    <span>공부 시간 [분]</span>
                    <Input type="range" name="day start time" placeholder="AM 07:00" required />
                </Label>
                <Label class="space-y-2 w-full">
                    <span>쉬는 시간 [분]</span>
                    <Input type="range" name="day end time" placeholder="PM 11:00" required />
                </Label>
            </div>
        </div>

        <Label class="space-y-2 w-full">
            <span>알람</span>
            <div class="flex justify-between space-x-2">
                <Input checked type="checkbox" required size="sm" style="width:40px; height:40px;"/>
                <Fileupload id="with_helper" class="mb-2 w-full" />
            </div>
        </Label>

        <Button type="submit" class="w-full1">설정 등록</Button>
    </form>
</Modal>

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
