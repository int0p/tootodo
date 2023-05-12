<script>
    import {
        Alert,
        Heading, P, A, Mark, Secondary, Span,
        Button, ButtonGroup,
        Hr,
        Toolbar, ToolbarButton,
        Input, Label, Helper,
        Chevron, Dropdown, DropdownItem,
        Tabs, TabItem, PaginationItem, Indicator
    } from 'flowbite-svelte';

    import Timer from '$lib/pomodoro.svelte';
    // export let data;
</script>

<div class="p-8 ">
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



