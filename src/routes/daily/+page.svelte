<script>
    import {
        Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,
        Button, Hr, Heading, Accordion, AccordionItem, Toggle,
    } from 'flowbite-svelte';
    // import TimeRecord from  'src/routes/daily/timeRecord.svelte';
    import TimeRecord from './timeRecord.svelte';
    import MemoRecord from './memoRecord.svelte';

    // Date
    let currentDate = new Date();
    let month = currentDate.getMonth()+1;
    let day = currentDate.getDay();

</script>

<div class="flex-col m-4 h-full w-[calc(100%-100px)]"> <!--    얘의 width가 full일 때 section모드에서 전체화면에 존재.  -->
<!--    date-->
    <div class="flex-col h-[150px] w-full">
        <!--        today-->
        <Hr class="my-4 mx-auto md:my-8 " height="h-1">{month}월 {day}일</Hr>

        <!--    week -->
        <div class="flex gap-2 mb-4 justify-center items-stretch">
            <Button outline color="dark" size="lg" >{day}, Mon</Button>
            <Button outline color="dark" size="xl" >{day+1}, Tue</Button>
            <Button outline color="dark" size="xl" >{day+2}, Wed</Button>
            <Button outline color="dark" size="xl" >{day+3}, Thu</Button>
            <Button outline color="dark" size="xl" >{day+4}, Fri</Button>
            <Button outline color="blue" size="xl">{day+5}, Sat</Button>
            <Button outline color="red" size="xl">{day+6}, Sun</Button>
        </div>
    </div>

<!--    Record -->
    <div class = "flex clear-both w-[calc(100%-2rem)]">
        <TimeRecord class="float-left top-0 left-0 "/>
        <MemoRecord class="float-right top-0 right-0 "/>
    </div>

</div>
