<script>
    import {Timeline, TimelineItem, Checkbox, } from "flowbite-svelte";
    import {todoList} from "$lib/stores/useLocStorage.js";
    import deleteOutlineRounded from "@iconify/icons-material-symbols/delete-outline-rounded.js";
    import Icon from "@iconify/svelte";
    let group = [];
    export let todoSelected = [];
     $: todoSelected = group;
     // $:console.log(group)
</script>

<Timeline class="w-full h-full  overflow-y-scroll " >
    <TimelineItem title="" date="Done List" >
        <ul class="mt-1 bg-white rounded-lg border border-gray-200 divide-y divide-gray-200
                h-full max-h-[25vh] overflow-y-scroll w-full ">
            {#if $todoList}
                {#each $todoList as {title,id} (id)}
                    <li class="max-h-[64px] overflow-y-hidden p-3 ">
                        <Checkbox custom class=" cursor-pointer  peer-checked:border-blue-600 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50"
                                  bind:group value={title}>
                            <div class="w-full relative space-x-3 flex justify-start items-centers w-max-[214px] ">
                                <div class="self-center w-[4px] h-[20px] bg-blue-600 absolute left-0"></div>
                                <Checkbox checked class="self-center"/>
                                <p class="text-[1.1rem] whitespace-normal max-w-[300px] overflow-x-hidden line-clamp-2">{title}</p>
                                <Icon icon={deleteOutlineRounded} width="22" class="h-full aspect-square self-center absolute right-0 bg-white"/>
                            </div>
                        </Checkbox>
                    </li>
                {/each}
<!--                <div class="my-2 border border-gray-200 dark:border-gray-700 rounded-lg p-2 w-44">{group}</div>-->
            {/if}
        </ul>
    </TimelineItem>
</Timeline>
