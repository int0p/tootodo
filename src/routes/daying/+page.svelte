<script>

    import Timer from "./timer/+page.svelte";
    import Memo from "./memo/+page.svelte";
    import TimeTable from "../weekly/timeTable.svelte";
    import DoneList from "$lib/components/doneList.svelte";
    let currentDate = new Date();
    import {currentTime} from "$lib/stores/clock.js";
    import {Button, Listgroup, ListgroupItem} from "flowbite-svelte";
    import Daily from "./daily/+page.svelte";

</script>

<div class="flex w-full h-full justify-center items-start space-x-4 my-4">
    <div class="h-full w-1/2 max-w-[1200px] min-w-[692px] border-4 border-double rounded-lg p-4">
        <Timer/>
    </div>

    <div class=" w-1/5 h-full flex-col border-4 border-double rounded-lg p-4 max-w-[440px] min-w-[300px]">

        <Daily/>
    </div>

</div>
