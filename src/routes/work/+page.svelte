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

    import WorkDetail from "./workDetail.svelte";
    import Status from "./status.svelte";
    import ProjectList from "./projectList.svelte";

</script>
<div class="flex-col m-4 h-full w-[calc(100%-100px)]"> <!--    얘의 width가 full일 때 section모드에서 전체화면에 존재.  -->
<!--        status: ongoing, done, not started, all-->
    <Status /> <!--    h: 80px -->

<!--        projects-->
    <div class = "flex clear-both h-[calc(100%-100px)]">
        <ProjectList class="float-left top-0 left-0 w-5/12"/>
        <WorkDetail class="float-right top-0 right-0 w-7/12"/>
    </div>
</div>


