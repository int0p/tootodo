<script>
    import {
        Hr,
    } from 'flowbite-svelte';

    import TimerContainer from "./timerContainer.svelte";
    import TimerSetTime from "./timerSetTime.svelte";
    let timeSet = 1;
</script>

<div class=" w-full flex-col justify-center items-center space-y-4">
    <!-- 타이머 -->
        <Hr  width="w-full" height="h-1">
            <div class="text-xl font-semibold text-gray-900 dark:text-white px-4">Too -> do</div>
        </Hr>
        <div class="flex pr-8 pb-4 w-full justify-around relative h-[360px]">
            <TimerContainer {timeSet}/>
            <TimerSetTime bind:timeSet/>
        </div>

</div>




