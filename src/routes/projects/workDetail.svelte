<script>
    import {
        Breadcrumb, BreadcrumbItem,
        Timeline, TimelineItem, Checkbox,
        Textarea, Alert, ToolbarButton,
        List, Li,
    } from 'flowbite-svelte';

</script>

<div class="w-7/12 float-right top-0 right-0 relative h-full flex-col justify-between content-stretch overflow-x-hidden ">
    <Breadcrumb aria-label="Solid background breadcrumb example" class="bg-gray-50 py-3 px-5 dark:bg-gray-900 mb-2">
        <BreadcrumbItem href="/" home>
            <svelte:fragment slot="icon">
                <svg
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
            </svelte:fragment>Home</BreadcrumbItem>
        <BreadcrumbItem href="/">
            <svelte:fragment slot="icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 dark:text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                </svg>
            </svelte:fragment>
            Projects</BreadcrumbItem>
        <BreadcrumbItem>
            <svelte:fragment slot="icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 dark:text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                </svg>
            </svelte:fragment>
            Flowbite Svelte</BreadcrumbItem>
    </Breadcrumb>

    <div class=" max-h-[calc(100%-100px)] overflow-y-auto p-2" >
        <Timeline >
            <TimelineItem title="" date="February 2022">
                <List tag="ul" class="mt-4 mb-2 space-y-4" list="none">
                    {#each Array(7) as _}
                        <Li icon class="gap-3">
                            <Checkbox checked color="green"><span class="text-lg">Checked state</span></Checkbox>
                        </Li>
                    {/each}
                </List>
            </TimelineItem>
            <TimelineItem title="" date="March 2022">
                <List tag="ul" class="mt-4 mb-2 space-y-4" list="none">
                    <Li icon class="gap-3">
                        <svg
                                class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                        ><path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd" /></svg>
                        Individual configuration
                    </Li>
                    {#each Array(4) as _}
                        <Li icon class="gap-3">
                            <Checkbox unchecked color="green"><span class="text-lg">Checked state</span></Checkbox>
                        </Li>
                    {/each}
                </List>
            </TimelineItem>
            <TimelineItem title="Application UI code in Tailwind CSS" date="April 2022">
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                    Get started with dozens of web components and interactive elements built on top of Tailwind
                    CSS.
                </p>
            </TimelineItem>
        </Timeline>
    </div>

    <!--  Memo settings-->
    <div class="flex justify-around border-t-2 absolute w-full bottom-0 right-0 bg-white">
        <form class="w-full">
            <label for="chat" class="sr-only">Your message</label>
            <Alert color="dark" class="px-3 py-2">
                <svelte:fragment slot="icon">
                    <ToolbarButton color="dark" class="text-gray-500 dark:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>
                        <span class="sr-only">Upload image</span>
                    </ToolbarButton>
                    <ToolbarButton color="dark" class="text-gray-500 dark:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" /></svg>
                        <span class="sr-only">Add emoji</span>
                    </ToolbarButton>
                    <Textarea id="chat" class="mx-4" rows="1" placeholder="Your message..."/>
                    <ToolbarButton type="submit" color="blue" class="rounded-full text-blue-600 dark:text-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>
                        <span class="sr-only">Send message</span>
                    </ToolbarButton>
                </svelte:fragment>
            </Alert>
        </form>
    </div>
</div>

