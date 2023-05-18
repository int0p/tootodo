<script>
import checkboxBlankOutline from "@iconify/icons-mdi/checkbox-blank-outline.js";
import checkboxMarkedOutline from "@iconify/icons-mdi/checkbox-marked-outline.js";
import {
    SidebarDropdownItem,
    SidebarDropdownWrapper,
    SidebarGroup,
    SidebarItem, Tabs, TabItem, Button,
} from "flowbite-svelte";
import Icon from "@iconify/svelte";
import starRounded from '@iconify/icons-material-symbols/star-rounded';

let spanClass = 'flex-1 ml-3 whitespace-nowrap';
$: activeUrl = '/dashboard'

let style_sidebarGrp = "h-[calc(100%-75px)] overflow-y-auto absolute bottom-2 left-0 w-full bg-gray-50";
let style_tabItem = "relative h-[40px] -top-2.5";
// todo tabitem내의 버튼 크기 줄이는 방법 알아야함 ㅠ
</script>

<div class="float-left bottom-0 left-0 h-full w-[290px] relative">
    <Tabs defaultClass="w-full flex h-[40px] justify-center items-center rounded-lg divide-x divide-gray-100 shadow ">
        <!--            working list-->
        <TabItem open class={style_tabItem}>
            <span slot="title">Working</span>
            <SidebarGroup class={style_sidebarGrp}>
                {#each Array(5) as _, index}
                    <SidebarDropdownWrapper label="Work - {index}" isOpen="{true}">
                        <svelte:fragment slot="icon">
                            <Icon icon={checkboxBlankOutline} width="22" />
                        </svelte:fragment>
                        <SidebarDropdownItem label="Products" />
                        <SidebarDropdownItem label="Billing" />
                        <SidebarDropdownItem label="Invoice" />
                    </SidebarDropdownWrapper>
                {/each}
                <SidebarItem label="Kanban" {spanClass}>
                    <svelte:fragment slot="icon">
                        <Icon icon={checkboxBlankOutline} width="22" />
                    </svelte:fragment>
                    <svelte:fragment slot="subtext">
                        <span
                                class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"
                        >+</span
                        >
                    </svelte:fragment>
                </SidebarItem>

            </SidebarGroup>
        </TabItem>

        <!--      done list-->
        <TabItem class={style_tabItem} >
            <span slot="title">Done</span>
            <SidebarGroup class={style_sidebarGrp} >
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
        </TabItem>

        <!--      highlight-->
        <TabItem class={style_tabItem}>
            <span slot="title"><Icon icon={starRounded} width = "22"/></span>
            <SidebarGroup class={style_sidebarGrp}>
            </SidebarGroup>
        </TabItem>
    </Tabs>
</div>

<style>
    * button{
        padding:0;
    }
</style>