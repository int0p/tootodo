<script>

    import Timer from "./timer/+page.svelte";
    import Memo from "./memo/+page.svelte";

    let showTimer = true;

</script>

<div class="flex w-full h-full justify-center items-start space-x-4 my-6">
    <div class="flex-col h-full w-1/2 max-w-[1100px] ">
        <Timer/>
    </div>
    <div class=" w-1/5 h-full flex-col border-4 border-dashed rounded-lg p-4">
<!--        <Memo/>-->
    </div>

    </div>

