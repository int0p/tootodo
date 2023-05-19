<script>
    import {Button, ButtonGroup, Chevron, Dropdown, DropdownItem, Input} from "flowbite-svelte";
    export let showTimer;
    import Icon from '@iconify/svelte';
    import clock2Fill from '@iconify/icons-mingcute/clock-2-fill';
</script>

<div class="pt-8 pl-4 pr-4 pb-4 flex gap-2">
    <!-- 그룹, 세션 추가 및 선택 -->
    <ButtonGroup class="w-full">
        <Button color="none" class="flex-shrink-0 text-gray-900 bg-gray-100 border border-gray-300 dark:border-gray-700 dark:text-white hover:bg-gray-200 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
            <Chevron>All categories</Chevron>
        </Button>
        <Dropdown>
            <DropdownItem>Work A</DropdownItem>
            <DropdownItem>Work B</DropdownItem>
            <DropdownItem>Work C</DropdownItem>
            <DropdownItem>Work D</DropdownItem>
        </Dropdown>

        <Input placeholder="session" />

        <Button color="blue" class="!p-2.5" type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-5 h-5" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/> </svg>
        </Button>
    </ButtonGroup>

    <Button gradient color="purpleToPink" class="w-[44px] aspect-square !p-2.5"
            on:click={()=>{showTimer=!showTimer}}>
        {#if !showTimer}
            <Icon icon={clock2Fill} width="24"/>
        {/if}
    </Button>
</div>