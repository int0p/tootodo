<script>
    import {Checkbox, } from "flowbite-svelte";
    import {todoList} from "$lib/stores/useLocStorage.js";
    import deleteOutlineRounded from "@iconify/icons-material-symbols/delete-outline-rounded.js";
    import Icon from "@iconify/svelte";
    let group = [];
    export let todoSelected = [];
     $: todoSelected = group;
     // $:console.log(group)
</script>

<div class="w-full h-full relative border-l">
    <div class="flex justify-start relative">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full  -left-1.5 border border-white "></div>
        <div class="text-sm font-normal leading-none text-gray-400 absolute left-3 ">Do List</div>
    </div>
    <ul class="my-1 bg-white rounded-lg border border-gray-200 divide-y divide-gray-200
        h-[calc(100%-2.7rem)] w-[calc(100%-1rem)] overflow-y-scroll absolute right-0 top-5">
        {#if $todoList}
            {#each $todoList as {title,id} (id)}
                <Checkbox custom class="cursor-pointer !border-t-0 peer-checked:border-blue-600 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50"
                          bind:group value={title}>
                    <li class="max-h-[64px] px-2 py-3 line-clamp-2 w-full  border-b border-dashed ">
                        <div class="w-full relative space-x-2 flex justify-start items-centers w-max-[214px] ">
                            <Checkbox checked class="self-center"/>
                            <div class="self-center w-[3px] h-full bg-blue-600 absolute left-3.5"></div>
                            <p class="text-[0.9rem] max-w-[calc(100%-68px)] line-clamp-2 relative left-2">{title}</p>
                            <Icon icon={deleteOutlineRounded} width="22" class="h-full aspect-square self-center absolute right-0 bg-white"/>
                        </div>
                    </li>
                </Checkbox>
            {/each}
            <!--                <div class="my-2 border border-gray-200 dark:border-gray-700 rounded-lg p-2 w-44">{group}</div>-->
        {/if}
    </ul>
</div>
