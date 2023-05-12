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
<div class="flex w-full">
    {#if showSidebar}
        <div transition:slide|local="{{delay: 100, duration: 1800, easing: quintOut, axis: 'x'}}" class="w-full flex ">
            <Sidebar />
            <Checkbox custom bind:checked={showSidebar}>
                <div class="h-full mt-8 ml-4 pr-2 rounded-lg border-r-2 border-blue-100 cursor-pointer
            peer-checked:border-blue-100
            "> <Icon icon={tableMoveColumnAfterRtl} class="h-full text-lg"/>
                </div>
            </Checkbox>
            <slot class="w-full h-full"/>
        </div>
    {:else}
        <Checkbox custom bind:checked={showSidebar}>
            <div class="h-full mt-8 ml-4 pr-2 rounded-lg border-r-2 border-blue-100 cursor-pointer
            peer-checked:border-blue-100
            "> <Icon icon= {tableMoveColumnAfterLtr} class="h-full text-lg"/>
            </div>
        </Checkbox>
        <slot class="w-full h-full"/>
    {/if}
</div>

