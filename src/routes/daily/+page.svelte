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

<div class="flex-col m-4 w-full h-full">
<!--    Title: today -->
    <Hr class="my-4 mx-auto md:my-8 w-full " height="h-1">{month}월 {day}일</Hr>

<!--    week -->
    <div class="w-full flex gap-2 mb-4 justify-center items-stretch">
        <Button outline color="dark" size="xl" >{day}, Mon</Button>
        <Button outline color="dark" size="xl" >{day}, Tue</Button>
        <Button outline color="dark" size="xl" >{day}, Wed</Button>
        <Button outline color="dark" size="xl" >{day}, Thu</Button>
        <Button outline color="dark" size="xl" >{day}, Fri</Button>
        <Button outline color="blue" size="xl">{day}, Sat</Button>
        <Button outline color="red" size="xl">{day}, Sun</Button>
    </div>

<!--    Record -->
    <div class = "flex w-full">
        <TimeRecord class="w-2/5 float-left top-0 left-0"/>
        <MemoRecord class="w-3/5 float-right top-0 right-0"/>
    </div>

</div>
