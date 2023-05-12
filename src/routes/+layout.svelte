<script>
	import '../app.scss';
	import '../app.postcss';
    import Sidebar from "./timerAsSidebar/+page.svelte";
    import {Checkbox} from "flowbite-svelte";
    let showSidebar = true;
</script>

<!--use Timer as sidebar-->
<!--TODO: Checkbox를 div포함시켜 함수화 할 수 있을까?-->
<div class="flex w-full">
    {#if showSidebar}
        <Sidebar class="w-2/3"/>
        <Checkbox custom bind:checked={showSidebar}>
            <div class="h-full mt-8 ml-4 p-4 rounded-lg border-2 border-blue-300 cursor-pointer
            peer-checked:border-blue-200
            "/>
        </Checkbox>
        <slot/>
    {:else}
        <Checkbox custom bind:checked={showSidebar}>
            <div class="h-full mt-8 ml-4 p-4 rounded-lg border-2 border-blue-300 cursor-pointer
            peer-checked:border-blue-200
            "/>
        </Checkbox>
        <slot class="w-full"/>
    {/if}
</div>

