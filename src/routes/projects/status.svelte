<script>
    import {Button, Search} from "flowbite-svelte";
    import Icon from '@iconify/svelte';
    import backgroundFill from '@iconify/icons-mingcute/background-fill';
    import balloon2Fill from '@iconify/icons-mingcute/balloon-2-fill';

</script>

<div class="w-full flex justify-center h-[40px] space-x-2">
    <Button class="aspect-square !p-0 " color="alternative" ><Icon icon={backgroundFill} width="30" /> </Button>

    <div class="flex items-center justify-center gap-2 w-full ">
        <Search size="md" />
        <Button class="!p-2.5">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
        </Button>
    </div>

</div>