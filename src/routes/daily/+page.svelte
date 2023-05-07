<script>
    import {
        Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,
        Button, Hr,
    } from 'flowbite-svelte';

    let currentDate = new Date();
    const month = currentDate.getMonth()+1;
    const day = currentDate.getDay();

</script>

<div class="flex-col m-8 ">
    <Hr class="my-4 mx-auto md:my-8 " height="h-1">{month}월 {day}일</Hr>
    <div class="flex gap-2 mb-4 justify-center">
        <Button outline color="dark">M</Button>
        <Button outline color="dark">T</Button>
        <Button outline color="dark">W</Button>
        <Button outline color="dark">T</Button>
        <Button outline color="dark">F</Button>
        <Button outline>S</Button>
        <Button outline color="red">S</Button>
    </div>

    <Table striped={true}>
        <TableHead>
            <TableHeadCell>10</TableHeadCell>
            <TableHeadCell>20</TableHeadCell>
            <TableHeadCell>30</TableHeadCell>
            <TableHeadCell>40</TableHeadCell>
            <TableHeadCell>50</TableHeadCell>
            <TableHeadCell>60</TableHeadCell>
        </TableHead>
        <TableBody class="divide-y">
            {#each Array(24) as _ }
                <TableBodyRow>
                    <TableBodyCell>|</TableBodyCell>
                    <TableBodyCell>|</TableBodyCell>
                    <TableBodyCell>|</TableBodyCell>
                    <TableBodyCell>|</TableBodyCell>
                    <TableBodyCell>|</TableBodyCell>
                    <TableBodyCell>|</TableBodyCell>
                </TableBodyRow>
            {/each}

        </TableBody>
    </Table>
</div>