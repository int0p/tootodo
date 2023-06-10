<script>
    import MemoList from "./listNote.svelte";
    import WorkList from "./listWork.svelte";

    let fullMemo = false;
</script>

<div class="flex h-full overflow-x-hidden" class:fullWidth={fullMemo} class:fitWidth={!fullMemo}>
    <WorkList bind:fullMemo/>
    <MemoList {fullMemo}/>
</div>

<style>
    .fullWidth {
        width: calc(100% + 210px);
    }
    .fitWidth {
        width: 100%;
    }
</style>