<script>
    import minimizeFill from "@iconify/icons-mingcute/minimize-fill.js";
    import addFill from "@iconify/icons-mingcute/add-fill.js";
    import {Badge, Heading} from "flowbite-svelte";
    import Icon from "@iconify/svelte";

    import {getContext} from "svelte";
    import timeSetKey from './key.js';
    const timeSetStore = getContext(timeSetKey);
</script>

<div class="flex-col timeController w-[120px] h-full ">
    {#each Array(6) as _ ,i}
        {@const time = (i+1) * 10}
        <div class="flex mb-3 border-0 rounded-lg shadow-md p-1 w-full space-y-2">
            <Badge large ><button on:click={()=>$timeSetStore.values.working -= time}>
                <Icon icon={minimizeFill} />
            </button></Badge>
            <Heading tag="h5" class="pr-2 pl-2">{ time}</Heading>
            <Badge color="red" large ><button on:click={()=>$timeSetStore.values.working += time}>
                <Icon icon={addFill} />
            </button></Badge>
        </div>
    {/each}
</div>

<style lang="scss">
  .timeController{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
  }
</style>