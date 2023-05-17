<script>
    import {Button, Input, Navbar, ButtonGroup, NavHamburger, NavLi, NavUl, Toggle, Search} from "flowbite-svelte";
</script>

<div class="w-full flex justify-around items-center h-[80px]">
    <Toggle class="" checked={false}></Toggle>

    <div class="space-x-2 ">
        <ButtonGroup>
            <Button pill outline color="green" class="w-[120px]">Not started</Button>
            <Button pill outline color="red" class="w-[120px]">Ongoing</Button>
            <Button pill outline color="yellow" class="w-[120px]">Done</Button>
        </ButtonGroup>
        <Button outline size="xs">ALL</Button>
    </div>

    <div class="flex items-center justify-center  md:order-2 gap-2">
        <Search size="md" />
        <Button class="!p-2.5">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
        </Button>
    </div>

</div>