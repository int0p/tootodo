<script>
    import {
        Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,
        Button, Hr, Heading, Accordion, AccordionItem, Toggle,
    } from 'flowbite-svelte';

    // Date
    let currentDate = new Date();
    const month = currentDate.getMonth()+1;
    const day = currentDate.getDay();

    // Record
    let items = [true,false,true]; // [todo,done,memo]
    const openRecordALL = () => items.forEach((_,i)=> items[i] = true);
    const closeRecordALL = () => items.forEach((_,i)=> items[i] = false);
    const resetRecord = () => {items = [true,false,true]};
</script>

<div class="flex-col m-4 w-full ">
    <Hr class="my-4 mx-auto md:my-8  " height="h-1">{month}월 {day}일</Hr>

    <div class="flex gap-2 mb-4 justify-center ">
        <Button outline color="dark">M</Button>
        <Button outline color="dark">T</Button>
        <Button outline color="dark">W</Button>
        <Button outline color="dark">T</Button>
        <Button outline color="dark">F</Button>
        <Button outline color="blue">S</Button>
        <Button outline color="red">S</Button>
    </div>

    <div class = "flex">
        <div>
            <Table striped={true}>
                <TableHead >
                    <TableHeadCell></TableHeadCell>
                    <TableHeadCell>10</TableHeadCell>
                    <TableHeadCell>20</TableHeadCell>
                    <TableHeadCell>30</TableHeadCell>
                    <TableHeadCell>40</TableHeadCell>
                    <TableHeadCell>50</TableHeadCell>
                    <TableHeadCell>60</TableHeadCell>
                </TableHead>

                <TableBody class="divide-y">
                    {#each Array(24) as _,index }
                        <TableBodyRow>
                            {@const time = (index+8)%12+1}
                            <TableBodyCell>{time}</TableBodyCell>
                            <TableBodyCell></TableBodyCell>
                            <TableBodyCell></TableBodyCell>
                            <TableBodyCell></TableBodyCell>
                            <TableBodyCell></TableBodyCell>
                            <TableBodyCell></TableBodyCell>
                            <TableBodyCell></TableBodyCell>
                        </TableBodyRow>
                    {/each}
                </TableBody>
            </Table>
        </div>

        <div class="flex-col w-1/2 m-4">
            <div class="flex justify-end m-2 space-x-1">
                <Button size="lg"  gradient color="blue" on:click={openRecordALL}></Button>
                <Button size="lg"  gradient color="green" on:click={resetRecord}></Button>
                <Button size="lg"  gradient color="red" on:click={closeRecordALL}></Button>
            </div>
            <Accordion multiple>
                <AccordionItem bind:open={items[0]}>
                    <span slot="header">Todo</span>
                    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
                </AccordionItem>
                <AccordionItem bind:open={items[1]}>
                    <div slot="header">Done</div>
                    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
                    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
                    <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                </AccordionItem>
                <AccordionItem bind:open={items[2]}>
                    <div slot="header">Memo</div>
                    <p>Something more</p>
                </AccordionItem>
            </Accordion>
        </div>
    </div>
</div>