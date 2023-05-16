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
        <div transition:slide|local="{{delay: 100, duration: 2000, easing: quintOut, axis: 'x'}}" class="flex">
            <TimerSidebar class="w-[100px] h-full"/>
            <Navbar bind:showSidebar/>
            <slot class="w-auto h-full"/>
        </div>
    {:else}
        <div class="w-full flex">
            <Navbar bind:showSidebar/>
            <slot class="w-full h-full"/>
        </div>
    {/if}
</div>

