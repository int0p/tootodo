<script>
    import {Alert, Button, ToolbarButton} from "flowbite-svelte";
    import Icon from "@iconify/svelte";
    import {afterUpdate, beforeUpdate, createEventDispatcher} from "svelte";

    export let memos = [];
    let listDiv;
    beforeUpdate(() => {
        if (listDiv) {
            console.log(listDiv.offsetHeight);
        }
    });
    afterUpdate(() => {
        console.log(listDiv.offsetHeight);
    });

    const dispatch = createEventDispatcher();

    function handleRemoveMemo(id){
        dispatch("removeMemo", {
            id,
        });
    }

    function handleToggle(id){
        dispatch("toggleSave", {
            id,
        });
    }
</script>

<div bind:this={listDiv}>
    {#each memos as {title,ask,save,id} (id)}
        <div class="flex justify-end m-3">
            <!--        message display-->
            <Alert color ={ ask ? "green" : "yellow"} >
                <!-- ask값이 true일땐 gpt와의 대화 모드가 되므로 대화창의 색을 초록으로 바꾼다. -->
                <span slot="icon" on:click={()=>handleToggle(id)}>
    <!--           save값이 true일땐 아이콘을 꽉찬 북마크으로 설정한다. -->
                    {#if save}
                    <Icon icon="material-symbols:bookmark-rounded" width="22"/>
                {:else}
                    <Icon icon="material-symbols:bookmark-outline-rounded" width="22"/>
                {/if}
            </span>
                {title}
            </Alert>

            <!--       delete button -->
            <ToolbarButton type="submit"  color="gray" class="rounded-full"
                           on:click={()=>handleRemoveMemo(id)}>
                <Icon icon="material-symbols:delete-outline-rounded" width="22"/>
                <span class="sr-only">Delete message</span>
            </ToolbarButton>
        </div>
    {/each}
</div>
