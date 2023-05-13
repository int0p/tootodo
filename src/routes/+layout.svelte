<script>
	import '../app.scss';
	import '../app.postcss';
    import Sidebar from "./timerAsSidebar/+page.svelte";
    import {Checkbox} from "flowbite-svelte";

    import Icon from '@iconify/svelte';
    import tableMoveColumnAfterLtr from '@iconify/icons-ooui/table-move-column-after-ltr';
    import tableMoveColumnAfterRtl from '@iconify/icons-ooui/table-move-column-after-rtl';

    import { draw, slide } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';

    export let showSidebar = true;
    $: console.log(showSidebar);
</script>

<!--use Timer as sidebar-->
<!--TODO: Checkbox를 div포함시켜 함수화 할 수 있을까?-->
<div class="flex w-full h-screen">
    {#if showSidebar}
        <div transition:slide|local="{{delay: 100, duration: 2000, easing: quintOut, axis: 'x'}}" class="flex">
            <Sidebar class="w-[100px] h-full"/>
            <Checkbox custom bind:checked={showSidebar}>
                <div class="h-full mt-8 ml-4 pr-2 rounded-lg border-r-2 border-blue-100 cursor-pointer">
                    <Icon icon={tableMoveColumnAfterRtl} class="h-screen text-lg"/> </div>
            </Checkbox>
            <slot class="w-auto h-full"/>
        </div>
    {:else}
        <div class="w-full flex">
            <Checkbox custom bind:checked={showSidebar} >
                <div class="h-full mt-8 ml-4 pr-2 rounded-lg border-r-2 border-blue-100 cursor-pointer">
                    <Icon icon= {tableMoveColumnAfterLtr} class="h-screen text-lg"/>
                </div>
            </Checkbox>
            <slot class="w-full h-full"/>
        </div>
    {/if}
</div>

