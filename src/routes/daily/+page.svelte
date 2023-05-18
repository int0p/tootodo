<script>
    import {
        Button, Hr,ButtonGroup,
    } from 'flowbite-svelte';
    import TimeRecord from './timeRecord.svelte';
    import MemoRecord from './memoRecord.svelte';

    // Date
    let currentDate = new Date();
    let month = currentDate.getMonth()+1;
    let day = currentDate.getDay();
    let style_btnWeek = "w-[80px] text-center uppercase ";
</script>

<div class="flex-col m-4 h-screen w-[calc(100%-100px)]"> <!--    얘의 width가 full일 때 section모드에서 전체화면에 존재.  -->
<!--    date-->
    <div class="flex-col h-[140px] w-full ">
        <!--        today-->
        <Hr class="my-8 mx-auto " height="h-1">{month}월 {day}일</Hr>

        <!--    week -->
        <div class="flex-col ">
            <div class="flex justify-center w-full gap-x-2">
                <div class={style_btnWeek}>MON</div>
                <div class={style_btnWeek}> TUE</div>
                <div class={style_btnWeek}>WED</div>
                <div class={style_btnWeek}>THU</div>
                <div class={style_btnWeek}>FRI</div>
                <div class="{style_btnWeek}, text-blue-700">SAT</div>
                <div class="{style_btnWeek}, text-red-700">SUN</div>
            </div>
            <div class="flex justify-center w-full gap-x-2">
                <Button outline color="dark" size="sm" class={style_btnWeek}>{day}</Button>
                <Button outline color="dark" size="sm" class={style_btnWeek}>{day}</Button>
                <Button outline color="dark" size="sm" class={style_btnWeek}>{day} </Button>
                <Button outline color="dark" size="sm" class={style_btnWeek}>{day} </Button>
                <Button outline color="dark" size="sm" class={style_btnWeek}>{day} </Button>
                <Button outline color="blue" size="sm" class={style_btnWeek}>{day} </Button>
                <Button outline color="red" size="sm" class={style_btnWeek}>{day} </Button>
            </div>
        </div>

    </div>

<!--    Record -->
    <div class = "flex clear-both h-[calc(100%-165px)]">
        <TimeRecord class=""/>
        <MemoRecord class=" "/>
    </div>

</div>
