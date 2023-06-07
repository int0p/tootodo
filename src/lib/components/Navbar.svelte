<script>
import {goto} from "$app/navigation";
import {onMount} from "svelte";
import {page} from "$app/stores";
import notebook2Fill from '@iconify/icons-mingcute/notebook-2-fill';
import calendarMonthFill from '@iconify/icons-mingcute/calendar-month-fill';
import chartPieFill from '@iconify/icons-mingcute/chart-pie-fill';
import settings1Fill from '@iconify/icons-mingcute/settings-1-fill';
import home3Fill from '@iconify/icons-mingcute/home-3-fill';


import folderOpenFill from '@iconify/icons-mingcute/folder-open-fill';
import chartPie from "@iconify/icons-uim/chart-pie.js";
import settingFilled from "@iconify/icons-ant-design/setting-filled.js";
import Icon from "@iconify/svelte";
import { BottomNav, BottomNavItem,BottomNavHeaderItem,Tooltip,BottomNavHeader  } from "flowbite-svelte"

export let showSidebar;
const buttonClass="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500"

</script>


<BottomNav position="absolute" navType="group" innerDiv="grid-cols-5">
    <BottomNavHeader slot="header">
        {#if $page.url.pathname !== '/'}
            <BottomNavHeaderItem itemName="New" />
            <BottomNavHeaderItem itemName="Popular" active={true}/>
            <BottomNavHeaderItem itemName="Following" />
        {/if}
    </BottomNavHeader>
    <BottomNavItem btnName="Statistics" id="group-search" on:click={()=>goto('/statistics')}>
        <Icon icon={chartPieFill} width="24" class={buttonClass} />
        <Tooltip arrow={false}>Statistics</Tooltip>
    </BottomNavItem>

    <BottomNavItem btnName="Projects" id="group-home" on:click={()=>goto('/projects')}>
        <Icon icon={notebook2Fill} width="24" class={buttonClass}/>
        <Tooltip arrow={false}>Projects</Tooltip>
    </BottomNavItem>

    <BottomNavItem btnName="Home" id="group-home" on:click={()=>goto('/')}>
        <Icon icon={home3Fill} width="24" class={buttonClass}/>
        <Tooltip arrow={false}>Home</Tooltip>
    </BottomNavItem>

    <BottomNavItem btnName="Weekly" id="group-bookmark" on:click={()=>goto('/weekly')}>
        <Icon icon={calendarMonthFill} width="24" class={buttonClass}/>
        <Tooltip arrow={false}>Weekly</Tooltip>
    </BottomNavItem>

    <BottomNavItem btnName="Settings" id="group-settings" on:click={()=>goto('/setting')}>
        <Icon icon={settings1Fill} width="24" class={buttonClass}/>
        <Tooltip arrow={false}>Settings</Tooltip>
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