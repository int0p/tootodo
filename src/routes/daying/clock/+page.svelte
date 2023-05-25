<script>
    import {
        Button, ButtonGroup,
        Hr,
        Input,
        Chevron, Dropdown, DropdownItem, Heading,
    } from 'flowbite-svelte';

    // import PomoTimer from '$lib/components/pomodoro.svelte';
    import CurrentClock from "./clock.svelte";
    import PomoTimer from "./pomodoro.svelte";
    import CjsPomo from "./pomo-chartjs.svelte";

</script>

<div class="pr-8 pl-8 pb-4 w-full">
    <!-- 타이머 -->
    <div class="flex-col justify-center items-center">
        <CjsPomo/>
        <Hr  width="w-full mb-4" height="h-1">
            <div class="text-xl font-semibold text-gray-900 dark:text-white px-6">Too -> do</div>
        </Hr>
        <div class="flex w-full">
            <PomoTimer/>
        </div>
    </div>
</div>




