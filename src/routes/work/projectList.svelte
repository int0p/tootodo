<script>
import TaskPage from "./taskPage.svelte";
import {TabItem, Tabs} from "flowbite-svelte";
</script>

<div class="ml-4 mr-4 flex-col h-[calc(100%-80px)] ">
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