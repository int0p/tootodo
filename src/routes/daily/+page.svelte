<script>
    import {
        Button, Hr,ButtonGroup,
    } from 'flowbite-svelte';
    import TimeRecord from './tenMTable.svelte';
    import MemoRecord from './todo.svelte';
    import TodoList from "$lib/components/todoList.svelte";
    import TimeTable from "./timeTable.svelte"
    // Date
    let currentDate = new Date();
    let month = currentDate.getMonth()+1;
    let day = currentDate.getDay();
    let style_btnWeek = "w-full text-center uppercase mb-2 text-lg font-bold";
    let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

</script>

<div class="flex m-6 h-[calc(100%-80px)] w-[calc(100%-60px)] justify-center items-center"> <!--    얘의 width가 full일 때 section모드에서 전체화면에 존재.  -->
<!--    date-->

        <div class="flex justify-around w-full gap-x-3 h-auto">
            {#each Array(7) as _, i}
                <div class="flex-col w-full h-full relative gap-y-4 h-[900px]">
                    <Button outline color="dark" size="sm" class={style_btnWeek}>{week[i]}</Button>
                    <div class={style_btnWeek}>
                        <span class="text-pink-600 absolute left-0">05</span>{day}</div>
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
