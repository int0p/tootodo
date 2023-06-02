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
import { BottomNav, BottomNavItem,BottomNavHeaderItem,Tooltip,BottomNavHeader  } from "flowbite-svelte"

export let showSidebar;
const buttonClass="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500"

</script>


<BottomNav position="absolute" navType="group" innerDiv="grid-cols-5">
    <BottomNavHeader slot="header">
        <BottomNavHeaderItem itemName="New" />
        <BottomNavHeaderItem itemName="Popular" active={true}/>
        <BottomNavHeaderItem itemName="Following" />
    </BottomNavHeader>
    <BottomNavItem btnName="Settings" id="group-settings" on:click={()=>goto('/setting')}>
        <Icon icon={settingFilled} width="24" class={buttonClass}/>
        <Tooltip arrow={false}>Settings</Tooltip>
    </BottomNavItem>
    <BottomNavItem btnName="Projects" id="group-home" on:click={()=>goto('/projects')}>
        <Icon icon={folderCopy}  width="24" class={buttonClass}/>
        <Tooltip arrow={false}>Projects</Tooltip>
    </BottomNavItem>
    <BottomNavItem btnName="Home" id="group-home" on:click={()=>goto('/')}>
        <svg class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
        </svg>
        <Tooltip arrow={false}>Home</Tooltip>
    </BottomNavItem>

    <BottomNavItem btnName="Weekly" id="group-bookmark" on:click={()=>goto('/weekly')}>
        <Icon icon={lapTimer} width="24" class={buttonClass}/>
        <Tooltip arrow={false}>Weekly</Tooltip>
    </BottomNavItem>

    <BottomNavItem btnName="Statistics" id="group-search" on:click={()=>goto('/statistics')}>
        <Icon icon={chartPie} width="24" class={buttonClass} />
        <Tooltip arrow={false}>Statistics</Tooltip>
    </BottomNavItem>

</BottomNav>



<!--<div class="w-[60px] ">-->
<!--&lt;!&ndash;<Checkbox custom bind:checked={showSidebar} class="h-full flex-col w-[60px] mr-2 ml-2 pr-2 rounded-lg border-r-2 border-blue-100 ">&ndash;&gt;-->

<!--    <Button class="mb-2 h-screen rounded-full border-b-4 border-r-2 border-l-2 border-gray-50"-->
<!--            outline color="alternative" pill={true} on:click={()=>showSidebar=!showSidebar}>-->
<!--        {#if showSidebar}-->
<!--            <Icon icon={tableMoveColumnAfterRtl} class="text-lg "/>-->
<!--        {:else}-->
<!--            <Icon icon={tableMoveColumnAfterLtr} class="text-lg"/>-->
<!--        {/if}-->
<!--    </Button>-->


<!--&lt;!&ndash;</Checkbox>&ndash;&gt;-->
<!--</div>-->