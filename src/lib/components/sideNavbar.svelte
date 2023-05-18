<script>
import {goto} from "$app/navigation";
import lapTimer from "@iconify/icons-radix-icons/lap-timer.js";
import folderCopy from "@iconify/icons-material-symbols/folder-copy.js";
import chartPie from "@iconify/icons-uim/chart-pie.js";
import settingFilled from "@iconify/icons-ant-design/setting-filled.js";
import {Button, Checkbox, } from "flowbite-svelte";
import Icon from "@iconify/svelte";
import tableMoveColumnAfterRtl from "@iconify/icons-ooui/table-move-column-after-rtl.js";
import tableMoveColumnAfterLtr from "@iconify/icons-ooui/table-move-column-after-ltr.js";

export let showSidebar;

</script>
<div class="w-[80px] ">
<Checkbox custom bind:checked={showSidebar} class="h-full flex-col w-[80px] mr-2 ml-2 pr-2 rounded-lg border-r-2 border-blue-100 ">

    <Button class="mb-2 h-screen rounded-full border-b-4 border-r-2 border-l-2 border-gray-50"
            outline color="alternative" pill={true} on:click={()=>showSidebar=!showSidebar}>
        {#if showSidebar}
            <Icon icon={tableMoveColumnAfterRtl} class="text-lg "/>
        {:else}
            <Icon icon={tableMoveColumnAfterLtr} class="text-lg"/>
        {/if}
    </Button>

    <div>
        <Button class="border-b-2 mb-2" outline color="alternative" on:click={()=>goto('/daily')} ><Icon icon={lapTimer} width="24"/></Button>
        <Button class="border-b-2 mb-2" outline color="alternative" on:click={()=>goto('/work')}><Icon icon={folderCopy}  width="24"/></Button>
        <Button class="border-b-2 mb-2" outline color="alternative" on:click={()=>goto('/statistics')}><Icon icon={chartPie} width="24" /></Button>
        <Button class="border-b-2 mb-2" outline color="alternative" on:click={()=>goto('/setting')}><Icon icon={settingFilled} width="24" /></Button>
    </div>

</Checkbox>
</div>