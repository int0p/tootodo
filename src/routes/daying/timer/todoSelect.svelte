<script>
    import {Hr, Timeline, TimelineItem, Radio, Heading, Badge} from "flowbite-svelte";
    export let todoSelected = {id: 0, title: ""};
    import {todoList} from "$lib/stores/useLocStorage.js";

</script>

<Timeline class="h-full max-h-[250px] overflow-y-scroll" >
    <TimelineItem title="" date="Todo List" >
        <ul class="w-48 mt-1 bg-white rounded-lg border border-gray-200 divide-y divide-gray-200
                h-full max-h-[270px] overflow-y-scroll">
            {#if $todoList}
                {#each $todoList as {title,id} (id)}
                    <li><Radio class="p-3" bind:group={todoSelected} value={{id, title}}>{title}</Radio>
                    </li>
                {/each}
            {/if}
        </ul>
    </TimelineItem>
</Timeline>
