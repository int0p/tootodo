<script>
    import {Timeline, TimelineItem, Radio, } from "flowbite-svelte";
    export let todoSelected = {id: 0, title: ""};
    import {todoList} from "$lib/stores/useLocStorage.js";

</script>

<Timeline class="w-full h-full  overflow-y-scroll " >
    <div class="mt-2"></div>
    <TimelineItem title="" date="Todo List" >
        <ul class="mt-1 bg-white rounded-lg border border-gray-200 divide-y divide-gray-200
                h-full max-h-[39vh] overflow-y-scroll mt-1 ">
            {#if $todoList}
                {#each $todoList as {title,id} (id)}
                    <li class="max-h-[62px] overflow-y-hidden ">
                        <Radio class="p-3" bind:group={todoSelected} value={{id, title}}>
                            <p class="whitespace-pre-wrap text-[1.2rem]">{title}</p>
                        </Radio>
                    </li>
                {/each}
            {/if}
        </ul>
    </TimelineItem>
</Timeline>
