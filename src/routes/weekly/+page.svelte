<script>
    import {
        Button, Hr,ButtonGroup,
    } from 'flowbite-svelte';
    import TodoList from "$lib/components/todoList.svelte";
    import TimeTable from "./timeTable.svelte"
    import TenTable from "./tenMTable.svelte"
    // Date
    let currentDate = new Date();
    import {currentTime} from "$lib/stores/clock.js";
    import DoneList from "$lib/components/doneList.svelte";

    let style_btnWeek = "w-full text-center uppercase mb-2 text-lg font-bold bg-gray-100 py-2 rounded-md hover:bg-gray-200";
    let week = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'];
    let style_btnWeek_Color = "w-full text-center uppercase mb-1 text-lg font-bold py-1 rounded-md hover:bg-rose-600 text-white bg-zinc-700";

    $: isTodayDay = (week)=>{
        if(week == $currentTime.day)
            return true;
        else return false;
    }

</script>

<div class="flex m-auto mt-6 h-[calc(100%-1rem)] w-[calc(100%-1rem)] justify-center items-center"> <!--    얘의 width가 full일 때 section모드에서 전체화면에 존재.  -->
    <div class="flex justify-around w-full gap-x-3 h-full">
        {#each Array(7) as _, i}
            {@const monDate = $currentTime.date - $currentTime.day +1}
            <div class="flex-col w-full relative gap-y-4 h-full">
                <div class="flex-col justify-start absolute top-0 w-full h-[80px]">
                    <button  class={style_btnWeek_Color} class:today={isTodayDay(i+1)}>{week[i+1]}</button>
                    <div class="w-full text-center uppercase mb-2 text-lg font-bold ">
                        <div class=" absolute left-0 font-digital"><span class="text-rose-600 text-xl">{monDate+i}</span> /<span class="text-lg">{$currentTime.month}</span></div>
                        <div class="text-2xl text-rose-950 font-digital absolute right-0">10H 30M</div>
                    </div>
                </div>
                <div class="absolute h-[calc(100%-80px)] flex-col w-full top-16 mt-1">
                    <div class="w-full h-[38%] absolute top-2"><DoneList/></div>
                    <div class="h-[62%] w-full absolute bottom-0"><TimeTable/></div>
                </div>
            </div>
        {/each}
    </div>
<!--        <div class="flex justify-around w-full gap-x-3 h-full">-->
<!--            {#each Array(7) as _, i}-->
<!--                <div class="flex-col w-full relative gap-y-4 h-full">-->
<!--                    <button  class={style_btnWeek} class:today={isTodayDay(i+1)}>{week[i+1]}</button>-->
<!--                    <div class="w-full text-center uppercase mb-2 text-lg font-bold ">-->
<!--                        <span class="text-pink-600 absolute left-0">{$currentTime.month}</span>{$currentTime.date}</div>-->
<!--                    <TodoList/>-->
<!--                    <TimeTable/>-->
<!--                </div>-->
<!--            {/each}-->
<!--        </div>-->
</div>

<style lang="scss">
.today{
        background-color: #9f1239; //rose-800
        color: white;
        &:hover{
          background-color: #e11d48; //rose-600
        }
    }

</style>
