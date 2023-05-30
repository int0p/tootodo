<script>
    import {Hr, Timeline, TimelineItem, Radio, Heading, Badge} from "flowbite-svelte";
    import minimizeFill from "@iconify/icons-mingcute/minimize-fill.js";
    import addFill from "@iconify/icons-mingcute/add-fill.js";
    import Icon from "@iconify/svelte";
    export let todoSelected = {id: 0, title: ""};
    let time = 5;
    let timeSet = 0;
    import {useLocStorage} from "$lib/stores/useLocStorage.js";
    export let todoListStore = useLocStorage("todoList", []);

</script>

<div class="w-[210px] h-[380px]">
    <Timeline class="h-full max-h-[250px] overflow-y-scroll" >
        <TimelineItem title="" date="February 2022" >
            <ul class="w-48 mt-1 bg-white rounded-lg border border-gray-200 divide-y divide-gray-200
                    h-full max-h-[270px] overflow-y-scroll">
                {#if $todoListStore}
                    {#each $todoListStore as {title,id} (id)}
                        <li><Radio class="p-3" bind:group={todoSelected} value={{id, title}}>{title}</Radio> </li>
                    {/each}
                {/if}
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