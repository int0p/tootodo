<script>
import checkboxBlankOutline from "@iconify/icons-mdi/checkbox-blank-outline.js";
import {SidebarDropdownItem, SidebarDropdownWrapper, SidebarGroup, SidebarItem} from "flowbite-svelte";
import Icon from "@iconify/svelte";
</script>

<!--            working list-->
<SidebarGroup>
    <SidebarItem label="Dashboard" href='/dashboard' active={activeUrl === '/dashboard'}>
        <svelte:fragment slot="icon">
            <Icon icon={checkboxBlankOutline} width="22" />
        </svelte:fragment>
    </SidebarItem>
    <SidebarDropdownWrapper label="E-commerce">
        <svelte:fragment slot="icon">
            <Icon icon={checkboxBlankOutline} width="22" />
        </svelte:fragment>
        <SidebarDropdownItem label="Products" />
        <SidebarDropdownItem label="Billing" />
        <SidebarDropdownItem label="Invoice" />
    </SidebarDropdownWrapper>
    <SidebarItem label="Kanban" {spanClass}>
        <svelte:fragment slot="icon">
            <Icon icon={checkboxBlankOutline} width="22" />
        </svelte:fragment>
        <svelte:fragment slot="subtext">
            <span
                    class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"
            >Pro</span
            >
        </svelte:fragment>
    </SidebarItem>
    <SidebarItem label="Inbox" {spanClass}>
        <svelte:fragment slot="icon">
            <Icon icon={checkboxBlankOutline} width="22" />
        </svelte:fragment>
        <svelte:fragment slot="subtext">
            <span
                    class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200"
            >3</span
            >
        </svelte:fragment>
    </SidebarItem>
</SidebarGroup>