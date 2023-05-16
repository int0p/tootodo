<script>
	import '../app.scss';
	import '../app.postcss';
    import Navbar from "$lib/components/sideNavbar.svelte";
    import TimerSidebar from "./timerAsSidebar/+page.svelte";
    import {Checkbox} from "flowbite-svelte";

    import Icon from '@iconify/svelte';
    import tableMoveColumnAfterLtr from '@iconify/icons-ooui/table-move-column-after-ltr';
    import tableMoveColumnAfterRtl from '@iconify/icons-ooui/table-move-column-after-rtl';

    import { draw, slide } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';

    let showSidebar = true;
    $:console.log(showSidebar);
</script>

<!--use Timer as sidebar-->
<div class="flex w-full h-screen">
    {#if showSidebar}
        <div transition:slide|local="{{delay: 100, duration: 1000, easing: quintOut, axis: 'x'}}" class="flex h-screen">
            <TimerSidebar class="w-1/3 h-screen float-left top-0 left-0"/>
            <Navbar bind:showSidebar/>
            <slot class="w-2/3 h-full"/>
        </div>
    {:else}
        <div class="flex">
            <Navbar bind:showSidebar/>
            <slot class="w-full h-full"/>
        </div>
    {/if}
</div>

