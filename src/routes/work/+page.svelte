<script>
    import {Heading,Badge,ButtonGroup,Toggle,
      BottomNav, BottomNavHeader, BottomNavHeaderItem, BottomNavItem, Tooltip,
      Navbar, NavBrand, NavLi, NavUl, NavHamburger, Input,
      Tabs, TabItem,
      StepIndicator,
      Sidebar, SidebarGroup, SidebarItem, SidebarWrapper, SidebarDropdownItem, SidebarDropdownWrapper,
      Card,
      Breadcrumb, BreadcrumbItem,
      Timeline, TimelineItem, Button,
      Textarea, Alert, ToolbarButton,
      List, Li, Span,
    } from 'flowbite-svelte';

    import MemoPage from "./memoPage.svelte";
    import TaskPage from "./taskPage.svelte";

</script>

<!--<Heading tag="h2" class="m-8 text-center"> Work Page </Heading>-->
<!--        <div class="mb-1 text-base font-medium text-indigo-700 dark:text-indigo-400">Indigo</div>-->

<div class="flex-col h-screen " >

  <Navbar let:hidden let:toggle>
    <NavBrand href="">
      <Toggle checked={false}></Toggle>
    </NavBrand>
    <div class="flex md:order-2">
      <Button color="none" data-collapse-toggle="mobile-menu-3" aria-controls="mobile-menu-3" aria-expanded="false" class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 dark:text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
      </Button>
      <div class="hidden relative md:block">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 dark:text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
        </div>
        <Input id="search-navbar" class="pl-10" placeholder="Search..." />
      </div>
      <NavHamburger on:click={toggle} />
    </div>
    <NavUl {hidden}>
      <NavLi href="/" active={true}>Home</NavLi>
      <NavLi href="/about">About</NavLi>
      <NavLi href="/services">Services</NavLi>
    </NavUl>
  </Navbar>

<!-- body -->
  <div class="flex h-full">

    <div class="ml-4 mr-4 flex-col h-full ">
<!--    project list-->
      <Tabs>
        <TabItem open title="Profile">
          <p class="text-sm text-gray-500 dark:text-gray-400"><b>Goal:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </TabItem>
        <TabItem title="Settings">
          <p class="text-sm text-gray-500 dark:text-gray-400"><b>Goal:</b> Lorem  dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </TabItem>
        <TabItem title="Users">
          <p class="text-sm text-gray-500 dark:text-gray-400"><b>Goal:</b> Lorem ipsum dolor sit amet,  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </TabItem>
        <TabItem title="Dashboard">
          <p class="text-sm text-gray-500 dark:text-gray-400"><b>Goal:</b> Lorem ipsum dolor sit amet, consectetur  elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </TabItem>
      </Tabs>

      <TaskPage/>

    </div>

    <div class="h-full ">
      <MemoPage/>
    </div>
  </div>


  </div>

