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
import {
    BottomNav,
    BottomNavItem,
    BottomNavHeaderItem,
    Tooltip,
    BottomNavHeader,
    NavHamburger,
    Button,
    ToolbarButton
} from "flowbite-svelte"
import skipForwardFill from "@iconify/icons-mingcute/skip-forward-fill.js";
import pauseFill from "@iconify/icons-mingcute/pause-fill.js";
import playFill from "@iconify/icons-mingcute/play-fill.js";

export let showSidebar;
const buttonClass="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500"

</script>
<!--left side bar-->
<!--<div class="absolute left-0 top-0 flex-col w-[30px] h-full m-3 space-y-3">-->
<!--    <Button class="aspect-square border-b border-0" color="alternative" size="xs" on:click={()=>goto('/')}><Icon icon={home3Fill} width="38" class={buttonClass}/></Button>-->
<!--    <Button class="aspect-square border-b border-0" color="alternative" size="xs" on:click={()=>goto('/weekly')}><Icon icon={calendarMonthFill} width="38" class={buttonClass}/></Button>-->
<!--    <Button class="aspect-square border-b border-0" color="alternative" size="xs" on:click={()=>goto('/projects')}><Icon icon={notebook2Fill} width="38" class={buttonClass}/></Button>-->
<!--    <Button class="aspect-square border-b border-0" color="alternative" size="xs" on:click={()=>goto('/statistics')}><Icon icon={chartPieFill} width="38" class={buttonClass}/></Button>-->
<!--    <Button class="aspect-square border-b border-0" color="alternative" size="xs" on:click={()=>goto('/settings')}><Icon icon={settings1Fill} width="38" class={buttonClass}/></Button>-->
<!--</div>-->

<BottomNav position="absolute" navType="group" innerDiv="grid-cols-5">
    <BottomNavHeader slot="header" outerClass="w-full">
        {#if $page.url.pathname !== '/'}
            <BottomNavHeaderItem itemName="todo" active={true} />
            <BottomNavHeaderItem itemName="remain" />
            <div class="flex justify-around mx-0 ">
                <Icon icon={skipForwardFill} hFlip={true} width="28" />
                <!--            <Icon icon={pauseFill} width="28" />-->
                <Icon icon={playFill} width="28"  />
                <Icon icon={skipForwardFill} width="28" />
            </div>
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

    <BottomNavItem btnName="Settings" id="group-settings" on:click={()=>goto('/settings')}>
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