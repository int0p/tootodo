<script>
    import {
        Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,
        Button, Hr, Heading, Accordion, AccordionItem, Toggle,
    } from 'flowbite-svelte';
    // import TimeRecord from  'src/routes/daily/timeRecord.svelte';
    import TenRecord from './timeRecord.svelte';
    import MemoRecord from './memoRecord.svelte';

    // Date
    let currentDate = new Date();
    let month = currentDate.getMonth()+1;
    let day = currentDate.getDay();

</script>

<div class="flex-col m-4 w-full h-full">
<!--    today -->
    <Hr class="my-4 mx-auto md:my-8  " height="h-1">{month}월 {day}일</Hr>

<!--    week -->
    <div class="flex gap-2 mb-4 justify-center  ">
        <Button outline color="dark">M</Button>
        <Button outline color="dark">T</Button>
        <Button outline color="dark">W</Button>
        <Button outline color="dark">T</Button>
        <Button outline color="dark">F</Button>
        <Button outline color="blue">S</Button>
        <Button outline color="red">S</Button>
    </div>

<!--    Record -->
    <div class = "flex">
        <TenRecord class="w-1/2"/>
        <MemoRecord class="w-1/2"/>
    </div>

</div>
