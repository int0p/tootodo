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

    let style_btnWeek = "w-full text-center uppercase mb-2 text-lg font-bold bg-gray-100 py-2 rounded-md hover:bg-gray-200";
    let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    $: isTodayDay = (week)=>{
        if(week == $currentTime.day)
            return true;
        else return false;
    }

</script>

<div class="flex m-6 h-full w-[calc(100%-2rem)] justify-center items-center"> <!--    얘의 width가 full일 때 section모드에서 전체화면에 존재.  -->
<!--    date-->

        <div class="flex justify-around w-full gap-x-3 h-full">
            {#each Array(7) as _, i}
                <div class="flex-col w-full relative gap-y-4 h-full">
                    <button  class={style_btnWeek} class:today={isTodayDay(i)}>{week[i]}</button>
                    <div class="w-full text-center uppercase mb-2 text-lg font-bold ">
                        <span class="text-pink-600 absolute left-0">{$currentTime.month}</span>{$currentTime.date}</div>
                    <TodoList/>
                    <TimeTable/>
                </div>
            {/each}
        </div>

        <!--    week -->
<!--        <div class="flex-col ">-->
<!--            <div class="flex justify-around w-full gap-x-3">-->
<!--                <div class={style_btnWeek}>MON</div>-->
<!--                <div class={style_btnWeek}> TUE</div>-->
<!--                <div class={style_btnWeek}>WED</div>-->
<!--                <div class={style_btnWeek}>THU</div>-->
<!--                <div class={style_btnWeek}>FRI</div>-->
<!--                <div class="{style_btnWeek}, text-blue-700">SAT</div>-->
<!--                <div class="{style_btnWeek}, text-red-700">SUN</div>-->
<!--            </div>-->

<!--            <div class="flex justify-around w-full gap-x-3">-->
<!--                <Button outline color="dark" size="sm" class={style_btnWeek}>{day}</Button>-->
<!--                <Button outline color="dark" size="sm" class={style_btnWeek}>{day}</Button>-->
<!--                <Button outline color="dark" size="sm" class={style_btnWeek}>{day} </Button>-->
<!--                <Button outline color="dark" size="sm" class={style_btnWeek}>{day} </Button>-->
<!--                <Button outline color="dark" size="sm" class={style_btnWeek}>{day} </Button>-->
<!--                <Button outline color="blue" size="sm" class={style_btnWeek}>{day} </Button>-->
<!--                <Button outline color="red" size="sm" class={style_btnWeek}>{day} </Button>-->
<!--            </div>-->

<!--        </div>-->
</div>

<style lang="scss">
.today{
        background-color: #831843; //pink-900
        color: white;
        &:hover{
          background-color: #be185d; //pink-700
        }
    }
</style>
