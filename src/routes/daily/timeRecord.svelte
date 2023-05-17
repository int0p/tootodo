<script>

    import {Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell} from "flowbite-svelte";

    const startTime_1 = 8; //0시때문에 row구할때 +1함
    const columns =[10,20,30,40,50,60];
    const rows = Array(24).fill(0).map((_,i)=>(i+startTime_1)%12+1);
    let table = Array.from(Array(rows.length), () => Array(columns.length).fill(false));
    // console.log(table);

    table[1][1] = true;
    table[1][2] = true;
    table[1][3] = true;
    table[1][4] = true;
    table[1][5] = true;
    table[2][0] = true;
    table[2][1] = true;
    table[2][2] = true;
</script>

<!--        time Record -->
<div class="w-full mr-4 max-h-[1210px] overflow-y-auto">
    <Table striped={true}  >
        <TableHead class ="border-b-2 border-gray-300 text-center">
            <TableHeadCell></TableHeadCell>
            {#each Array(6) as _,index}
                <TableBodyCell class ="border-l-2 border-gray-200" >{columns[index]}</TableBodyCell>
            {/each}
        </TableHead>

        <TableBody class="divide-y">
            {#each Array(24) as _,index }
                <TableBodyRow>
                    {@const rowIdx = index}
                    <TableBodyCell class="text-center">{rows[rowIdx]}</TableBodyCell>
                    {#each Array(6) as _,index}
                        {#if table[rowIdx][index] === true }
                            <TableBodyCell class ="bg-purple-100 border-l-2 border-gray-200" ></TableBodyCell>
                        {:else}
                            <TableBodyCell class ="border-l-2 border-gray-200" ></TableBodyCell>
                        {/if}
                    {/each}
                </TableBodyRow>
            {/each}
        </TableBody>
    </Table>
</div>