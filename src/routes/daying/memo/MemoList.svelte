<script>
    import {Alert, ToolbarButton, P} from "flowbite-svelte";
    import Icon from "@iconify/svelte";
    import bookmarkRounded from '@iconify/icons-material-symbols/bookmark-rounded';
    import bookmarkOutlineRounded from '@iconify/icons-material-symbols/bookmark-outline-rounded';
    import deleteOutlineRounded from '@iconify/icons-material-symbols/delete-outline-rounded';

    import {afterUpdate, createEventDispatcher} from "svelte";
    import {slide} from "svelte/transition";

    export let memos = [];
    // export let todoList = [];

    let listDivHeight=0;
    let listDiv;
    let autoScroll = true;
    let prevListLength= memos.length;

    // beforeUpdate(() => {
    //     if (listDivHeight) {
    //         // console.log(listDivHeight);
    //     }
    // });

    afterUpdate(() => {
        // console.log(listDivHeight);
        if (autoScroll) {
            listDiv.scrollTo(0, listDiv.scrollHeight);
        }
        autoScroll = false;
    });

    $:{
        // console.log(memos.length, prevListLength);
        autoScroll = memos.length > prevListLength ;
        prevListLength = memos.length;
    }
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

    // saved memo list --> todo list
    let showTodo = false;
   export let showTimer = true;

</script>

<div bind:offsetHeight={listDivHeight} bind:this={listDiv}
     class="w-full h-full overflow-y-auto ">

    <!-- memo list-->
    <div  class="w-full" >
        {#each memos as {title,ask,save,id,date} (id)}
            <div class="flex justify-end items-end mb-3" >
                <P class="text-xs mt-8 mr-2">{date}</P>

                <!--        message display-->
                <!-- ask값이 true일땐 gpt와의 대화 모드가 되므로 대화창의 색을 초록으로 바꾼다. -->
                <Alert color ={ ask ? "green" : "purple"} class="max-w-[calc(100%-155px)] ">
                    <!--           save값이 true일땐 아이콘을 꽉찬 북마크으로 설정한다. -->
                    <span slot="icon" on:click={()=>handleToggle(id)}>
                        {#if save}
                            <Icon icon={bookmarkRounded} width="22"/>
                        {:else}
                            <Icon icon={bookmarkOutlineRounded} width="22"/>
                        {/if}
                    </span>
                    <span class="break-words"> {title} </span>

                </Alert>

                <!--      todo:  delete button -> 꾹 누르면 삭제기능 추가-->
                <ToolbarButton type="submit"  color="gray" class="rounded-full"
                               on:click={()=>handleRemoveMemo(id)}>
                    <Icon icon={deleteOutlineRounded} width="22"/>
                    <span class="sr-only">Delete message</span>
                </ToolbarButton>

            </div>
        {/each}
    </div>
</div>

<style>
    .fullHeight{
        height: calc(100% - 160px);
    }
    .fitHeight{
        height: calc(100% - 60px);
    }
</style>