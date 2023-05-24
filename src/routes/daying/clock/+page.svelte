<script>
    import {
        Button, ButtonGroup,
        Hr,
        Input,
        Chevron, Dropdown, DropdownItem,
    } from 'flowbite-svelte';

    // import PomoTimer from '$lib/components/pomodoro.svelte';
    import CurrentClock from "./clock.svelte";
    import PomoTimer from "./pomodoro.svelte";

</script>

<div class="pr-8 pl-8 pb-4 w-full">
    <!-- 타이머 -->
    <div class="timer-container ">
        <Hr  width="w-full mb-4" height="h-1"> Too -> do
        </Hr>
        <div class="flex w-full">
            <PomoTimer/>
        </div>
    </div>
</div>

<style lang="scss">
  .timer-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>



