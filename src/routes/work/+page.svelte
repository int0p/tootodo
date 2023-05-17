<script>
    import {
        Heading, Badge, ButtonGroup, Toggle,
        BottomNav, BottomNavHeader, BottomNavHeaderItem, BottomNavItem, Tooltip,
        Navbar, NavBrand, NavLi, NavUl, NavHamburger, Input,
        Tabs, TabItem,
        StepIndicator,
        Sidebar, SidebarGroup, SidebarItem, SidebarWrapper, SidebarDropdownItem, SidebarDropdownWrapper,
        Card,
        Breadcrumb, BreadcrumbItem,
        Timeline, TimelineItem, Button,
        Textarea, Alert, ToolbarButton,
        List, Li, Span, Hr,
    } from 'flowbite-svelte';

    import MemoPage from "./memoPage.svelte";
    import WorkState from "./workState.svelte";
    import ProjectList from "./projectList.svelte";

</script>
<div class="flex-col m-4 h-full w-[calc(100%-2rem)]"> <!--    얘의 width가 full일 때 section모드에서 전체화면에 존재.  -->
<!--        status: ongoing, done, not started, all-->
    <WorkState class="w-full"/> <!--    h: 80px -->

<!--        projects-->
    <div class = "flex clear-both">
        <ProjectList class="float-left top-0 left-0 w-[500px]"/>
        <MemoPage class="float-right top-0 right-0 w-[calc(100%-500px)]"/>
    </div>
</div>


