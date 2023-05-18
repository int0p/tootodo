<script>
    import MemoList from "./listMemo.svelte";
    import WorkList from "./listWork.svelte";

    let fullMemo = false;

</script>

{#if fullMemo}
    <div class="flex h-[calc(100vh-290px)] w-[calc(100%+210px)] overflow-x-hidden">
        <WorkList bind:fullMemo/>
        <MemoList {fullMemo}/>
    </div>
{:else}
    <div class="flex h-[calc(100vh-290px)] w-full overflow-x-hidden ">
        <WorkList bind:fullMemo/>
        <MemoList {fullMemo}/>
    </div>
{/if}
