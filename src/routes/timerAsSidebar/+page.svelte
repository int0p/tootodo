<script>
    import Timer from "./clock/+page.svelte";
    import Memo from "./memo/+page.svelte";
    import WorkSelect from "./work/+page.svelte";
    let showTimer = true;
</script>

<div class="flex-col ml-4 max-w-[620px] h-screen float-left top-0 left-0">
    <WorkSelect bind:showTimer />
    {#if !showTimer}
        <div>
            <Timer />
        </div>
    {/if}
    <Memo {showTimer}/>
</div>
