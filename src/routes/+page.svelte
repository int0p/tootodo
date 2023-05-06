<script>
    import Timer from "./timer/+page.svelte"
    import Daily from "./daily/+page.svelte"
    import Memo from "./memo/+page.svelte"
</script>


<div class="flex">
    <div class="flex-col">
        <Timer class="w-1/2"/>
        <Memo class="w-1/2"/>
    </div>
    <Daily class="w-1/2"/>
</div>