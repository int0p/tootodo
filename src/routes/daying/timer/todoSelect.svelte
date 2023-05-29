<script>
    import {Hr, Timeline, TimelineItem, Radio, Heading, Badge} from "flowbite-svelte";
    import minimizeFill from "@iconify/icons-mingcute/minimize-fill.js";
    import addFill from "@iconify/icons-mingcute/add-fill.js";
    import Icon from "@iconify/svelte";
    let technology = [];
    let timeSet = 0;
</script>

<div class="w-[210px] h-[380px]">
    <Timeline class="h-[300px]" >
        <TimelineItem title="" date="February 2022">
            <ul class="w-48 bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-600 divide-y divide-gray-200 dark:divide-gray-600">
                <li><Radio class="p-3" bind:group={technology} value="svelte">Svelte</Radio></li>
                <li><Radio class="p-3" bind:group={technology} value="vue js">Vue JS</Radio></li>
                <li><Radio class="p-3" bind:group={technology} value="react">React</Radio></li>
                <li><Radio class="p-3" bind:group={technology} value="angular">Angular</Radio></li>
            </ul>
        </TimelineItem>
    </Timeline>

    <div class="flex-col timeController w-[210px] h-[90px] absolute bottom-0 ">
        <Hr height="h-1"/>
        <div class="flex space-x-1 absolute bottom-4 w-[210px] text-center">
            <div class="flex mb-3 border-0 rounded-lg shadow-md p-1 w-full space-y-2 w-[50px]">
                <Heading tag="h5" class="pr-2 pl-2">5</Heading>
            </div>

            <div class="flex mb-3 border-0 rounded-lg shadow-md p-1 w-full space-y-2 w-[50px]">
                <Heading tag="h5" class="pr-2 pl-2">10</Heading>
            </div>

            <div class="flex mb-3 border-0 rounded-lg shadow-md p-1 w-full space-y-2 w-[50px]">
                <Heading tag="h5" class="pr-2 pl-2">25</Heading>
            </div>

            <div class="flex mb-3 border-0 rounded-lg shadow-md p-1 w-full space-y-2 w-[50px]">
                <Heading tag="h5" class="pr-2 pl-2">60</Heading>
            </div>
        </div>

        <div class="flex justify-between absolute bottom-0 w-[210px] space-x-2">
            <Badge large class="w-1/2"><button on:click={()=>timeSet-= time}>
                <Icon icon={minimizeFill} />
            </button></Badge>
            <Badge color="red" large class="w-1/2"><button on:click={()=>timeSet += time}>
                <Icon icon={addFill} />
            </button></Badge>
        </div>

    </div>
</div>