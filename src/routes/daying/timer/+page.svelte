<script>
    import {
        Hr,
    } from 'flowbite-svelte';

    import TimerContainer from "./timerContainer.svelte";
    import TimerSetTime from "./timerSetTime.svelte";

    import {setContext} from "svelte";
    import {writable} from "svelte/store";
    import timeSetKey from './key.js';

    const timeSet = writable({values:{
            working: 1,
            default: 3,
            breaking: 10,
            isRunning: false,
        }, errors:{}});
    setContext(timeSetKey,timeSet);

</script>

<div class=" w-full flex-col justify-center items-center space-y-4">
    <!-- 타이머 -->
<!--    <pre>{JSON.stringify($timeSet, null,2)}</pre>-->
        <Hr  width="w-full" height="h-1">
            <div class="text-xl font-semibold text-gray-900 dark:text-white px-4">Too -> do</div>
        </Hr>
        <div class="flex pr-8 pb-4 w-full justify-around relative h-[360px]">
            <TimerContainer />
            <TimerSetTime />
        </div>

</div>




