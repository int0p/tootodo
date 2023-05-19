<script>
    import {
        Button, ButtonGroup,
        Hr,
        Input,
        Chevron, Dropdown, DropdownItem,
    } from 'flowbite-svelte';

    import Timer from '$lib/components/pomodoro.svelte';
    // export let data;
</script>

<div class="pr-8 pl-8 pb-4">
    <!-- 타이머 -->
    <div class="timer-container ">
        <Hr class="my-4 mx-auto md:my-10 " width="w-full" height="h-1">
            <div class = "flex">
                <ButtonGroup class="space-x-px">
                    <Button color="blue">Work</Button>
                    <Button outline color="blue">Break</Button>
                </ButtonGroup>
            </div>
        </Hr>
        <Timer/>
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



