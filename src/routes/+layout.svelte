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
<div class="flex clear-both">
    {#if showSidebar}
        <div transition:slide|local="{{delay: 0, duration: 1000, easing: quintOut, axis: 'x'}}" class="flex w-full h-screen">
            <TimerSidebar class="w-[615px] h-screen float-left top-0 left-0" style="max-width:615px;"/>
            <Navbar bind:showSidebar class="w-[80px]"/>
            <slot class="w-[calc(100%-615px)] overflow-y-hidden h-screen float-right top-0 right-0"/>
        </div>
    {:else}
        <div class="flex w-full h-screen"> <!-- 얘가 full이어야 가로 화면에 꽉참 -->
            <Navbar bind:showSidebar class=""/>
            <slot class="w-[calc(100%-2rem)] h-screen"/>
        </div>
    {/if}
</div>

