<script>

    import Timer from "./timer/+page.svelte";
    import Memo from "./memo/+page.svelte";
    import TimeTable from "../weekly/timeTable.svelte";
    import TodoList from "$lib/components/todoList.svelte";
    let currentDate = new Date();
    import {currentTime} from "$lib/stores/clock.js";

    let style_btnWeek = "w-full text-center uppercase mb-2 text-lg font-bold bg-gray-100 py-2 rounded-md hover:bg-gray-200 ";
    let style_btnWeek_Color = "w-full text-center uppercase mb-2 text-lg font-bold bg-gray-100 py-2 rounded-md hover:bg-gray-200 text-white bg-pink-800";
    let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


</script>

<div class="flex w-full h-full justify-center items-start space-x-4 my-6">
    <div class="flex-col h-full w-1/2 max-w-[1100px] ">
        <Timer/>
    </div>
    <div class=" w-1/5 h-full flex-col border-4 border-dashed rounded-lg p-4">
        <div class="flex-col w-full relative gap-y-4 h-full ">
            <button  class={style_btnWeek_Color} >{week[$currentTime.day]}</button>
            <div class="w-full text-center uppercase mb-2 text-lg font-bold ">
                <span class="text-pink-600 absolute left-0">{$currentTime.month}</span>{$currentTime.date}</div>
            <div class="h-2/5"><TodoList/></div>
            <div class="h-2/5"><TimeTable/></div>
        </div>

    </div>

</div>
