<script>
    import {
        Hr,Checkbox, Heading, List, Li,
    } from 'flowbite-svelte';

    import TimerContainer from "./timerContainer.svelte";
    import TimerSetTime from "./timerSetTime.svelte";
    import TodoSelect from "./todoSelect.svelte";

    import {setContext} from "svelte";
    import {writable} from "svelte/store";
    import timeSetKey from './key.js';
    import Controller from "./Controller.svelte";

    const timeSet = writable({values:{
            working: 1,
            default: 3,
            breaking: 10,
            isRunning: false,
        }, errors:{}});
    setContext(timeSetKey,timeSet);

</script>

<div class=" flex-col justify-center items-center space-y-4 m-6 w-[540px]">
    <!-- 타이머 -->
    <Hr  width="w-full" height="h-1">
        <div class="text-xl font-semibold text-gray-900 dark:text-white px-4">Too -> do</div>
    </Hr>
    <div class="flex justify-center items-center relative h-[380px] w-full space-x-5">
        <TodoSelect/>
        <TimerContainer />
    </div>
    <Controller/>
<!--    <pre>{JSON.stringify($timeSet, null,2)}</pre>-->
</div>




