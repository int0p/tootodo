<script>

    import {Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell} from "flowbite-svelte";

    const columns =[10,20,30,40,50,60];
    const startTime_1 = 8; //0시때문에 row구할때 +1함
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
<div class="w-full h-[calc(100%-350px)] overflow-y-scroll absolute top-[300px]">
    <table striped={true} >
        <thead class ="border-b-2 border-gray-300 text-center  ">
            <TableHeadCell></TableHeadCell>
            {#each Array(6) as _,index}
                <TableBodyCell class ="border-l-2 border-gray-200  !pt-2 !pb-2 !text-black"  >{columns[index]}</TableBodyCell>
            {/each}
        </thead>

        <tbody class="divide-y ">
            {#each Array(24) as _,index }
                <TableBodyRow>
                    {@const rowIdx = index}
                    <TableBodyCell class="text-center !p-2 !text-black">{rows[rowIdx]}</TableBodyCell>
                    {#each Array(6) as _,index}
                        {#if table[rowIdx][index]}
                            <TableBodyCell class ="bg-purple-100 border-l-2 border-gray-200 " ></TableBodyCell>
                        {:else}
                            <TableBodyCell class ="border-l-2 border-gray-200 " ></TableBodyCell>
                        {/if}
                    {/each}
                </TableBodyRow>
            {/each}
        </tbody>
    </table>
</div>