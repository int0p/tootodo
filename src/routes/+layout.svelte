<script>
	import '../app.scss';
	import '../app.postcss';
    import Navbar from "$lib/components/sideNavbar.svelte";
    import TimerSidebar from "./timerAsSidebar/+page.svelte";

    import { draw, slide } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';

    let showSidebar = true;
    // $:console.log(showSidebar);
</script>

<!--use Timer as sidebar-->
<div class="flex w-full h-screen clear-both">
    {#if showSidebar}
        <div transition:slide|local="{{delay: 100, duration: 1000, easing: quintOut, axis: 'x'}}" class="flex w-full h-screen">
            <TimerSidebar class="w-[615px] h-screen float-left top-0 left-0"/>
            <Navbar bind:showSidebar class="w-[80px] absolute"/>
            <slot class="h-screen float-right top-0 right-0"/>
        </div>
    {:else}
        <div class="flex">
            <Navbar bind:showSidebar/>
            <slot class="w-full h-screen"/>
        </div>
    {/if}
</div>

