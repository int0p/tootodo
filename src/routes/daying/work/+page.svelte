<script>
    import {Button, ButtonGroup, Chevron, Dropdown, DropdownItem, Input} from "flowbite-svelte";
    export let showTimer;
    import Icon from '@iconify/svelte';
    import clock2Fill from '@iconify/icons-mingcute/clock-2-fill';
    import WorkSelect from "./workSelect.svelte";
</script>

<div class="pt-8 pl-4 pr-4 pb-4 m-4 mt-0 flex gap-2">
    <!-- 그룹, 세션 추가 및 선택 -->
    <WorkSelect/>

    <Button gradient color="purpleToPink" class="w-[44px] aspect-square !p-2.5"
            on:click={()=>{showTimer=!showTimer}}>
        {#if !showTimer}
            <Icon icon={clock2Fill} width="24"/>
        {/if}
    </Button>
</div>