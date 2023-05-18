<script>
    import {
        Button, Hr,
    } from 'flowbite-svelte';
    import TimeRecord from './timeRecord.svelte';
    import MemoRecord from './memoRecord.svelte';

    // Date
    let currentDate = new Date();
    let month = currentDate.getMonth()+1;
    let day = currentDate.getDay();

</script>

<div class="flex-col m-4 h-screen w-[calc(100%-100px)]"> <!--    얘의 width가 full일 때 section모드에서 전체화면에 존재.  -->
<!--    date-->
    <div class="flex-col h-[130px] w-full">
        <!--        today-->
        <Hr class="my-4 mx-auto md:my-8 " height="h-1">{month}월 {day}일</Hr>

        <!--    week -->
        <div class="flex gap-2 mb-4 justify-center items-stretch">
            <Button outline color="dark" size="md" >{day}, Mon</Button>
            <Button outline color="dark" size="md" >{day+1}, Tue</Button>
            <Button outline color="dark" size="md" >{day+2}, Wed</Button>
            <Button outline color="dark" size="md" >{day+3}, Thu</Button>
            <Button outline color="dark" size="md" >{day+4}, Fri</Button>
            <Button outline color="blue" size="md">{day+5}, Sat</Button>
            <Button outline color="red" size="md">{day+6}, Sun</Button>
        </div>
    </div>

<!--    Record -->
    <div class = "flex clear-both h-[calc(100%-150px)]">
        <TimeRecord class=""/>
        <MemoRecord class=" "/>
    </div>

</div>
