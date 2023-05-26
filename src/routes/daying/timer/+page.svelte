<script>
    import {
        Hr,
    } from 'flowbite-svelte';

    import TimerContainer from "./timerContainer.svelte";
    import TimerSetTime from "./timerSetTime.svelte";
    let timeSet = 1;
</script>

<div class="pr-8 pl-8 pb-4 w-full">
    <!-- 타이머 -->
    <div class="flex-col justify-center items-center space-y-4">
        <Hr  width="w-full mb-4" height="h-1">
            <div class="text-xl font-semibold text-gray-900 dark:text-white px-6">Too -> do</div>
        </Hr>
        <div class="flex w-full justify-around">
            <TimerContainer {timeSet}/>
            <TimerSetTime bind:timeSet/>
        </div>
    </div>


</div>




