<script>
	import '../app.scss';
	import '../app.postcss';
    import Navbar from "$lib/components/Navbar.svelte";
    import TimerSidebar from "./daying/+page.svelte";
    import { slide } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    //To disable server side rendering
    export const prerender = true;
    export const trailingSlash = 'always';
    export const ssr = false;
    // let showSidebar = true;
    // $:console.log(showSidebar);
</script>
<div class="flex-col h-screen">
    <div class="max-w-[calc(100%-2rem)] h-[calc(100%-110px)] m-auto">
        <slot />
    </div>
    <Navbar/>
</div>


<!--use Timer as sidebar-->
<!--<div class="flex clear-both">-->
<!--    {#if showSidebar}-->
<!--        <div transition:slide|local="{{delay: 0, duration: 1000, easing: quintOut, axis: 'x'}}" class="flex w-full h-screen">-->
<!--            <TimerSidebar class="w-[615px] h-screen float-left top-0 left-0" style="max-width:620px;"/>-->
<!--            <Navbar bind:showSidebar class="w-[80px]"/>-->
<!--            <slot class="w-[calc(100%-700px)] overflow-y-hidden h-screen float-right top-0 right-0"/>-->
<!--        </div>-->
<!--    {:else}-->
<!--        <div class="flex w-full h-screen"> &lt;!&ndash; 얘가 full이어야 가로 화면에 꽉참 &ndash;&gt;-->
<!--            <Navbar bind:showSidebar class=""/>-->
<!--            <slot class="w-[calc(100%-1rem)] h-screen"/>-->
<!--        </div>-->
<!--    {/if}-->
<!--</div>-->

