<script>
import checkboxBlankOutline from "@iconify/icons-mdi/checkbox-blank-outline.js";
import checkboxMarkedOutline from "@iconify/icons-mdi/checkbox-marked-outline.js";
import {
    Sidebar,
    SidebarDropdownItem,
    SidebarDropdownWrapper,
    SidebarGroup,
    SidebarItem,
    SidebarWrapper
} from "flowbite-svelte";
import Icon from "@iconify/svelte";

let spanClass = 'flex-1 ml-3 whitespace-nowrap';
$: activeUrl = '/dashboard'
</script>

<div class="float-left bottom-0 left-0 relative h-full">
    <Sidebar >
        <SidebarWrapper >
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

            <!--      done list-->
            <SidebarGroup border>
                <SidebarItem label="Users">
                    <svelte:fragment slot="icon">
                        <Icon icon={checkboxMarkedOutline} width="22"/>
                    </svelte:fragment>
                </SidebarItem>
                <SidebarItem label="Sign In">
                    <svelte:fragment slot="icon">
                        <Icon icon={checkboxMarkedOutline} width="22"/>
                    </svelte:fragment>
                </SidebarItem>
                <SidebarItem label="Sign Up">
                    <svelte:fragment slot="icon">
                        <Icon icon={checkboxMarkedOutline} width="22"/>
                    </svelte:fragment>
                </SidebarItem>
            </SidebarGroup>
        </SidebarWrapper>
    </Sidebar>
</div>
