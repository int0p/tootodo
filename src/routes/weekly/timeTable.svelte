<script>
    const startTime_1 = 8; //0시때문에 row구할때 +1함
    let dayMinutes = [10,20,30,40,50,60];
    let dayHours = Array.from({length: 24}, (_, i) =>(i+startTime_1)%12+1);

    let table = Array.from(Array(dayMinutes.length), () => Array(dayHours.length).fill(false));
    // console.log(table);

    table[1][1] = true;
    table[1][2] = true;
    table[1][3] = true;
    table[1][4] = true;
    table[1][5] = true;
    table[2][0] = true;
    table[2][1] = true;
    table[2][2] = true;

    let events = [];
</script>

<div class="w-full h-full overflow-y-scroll ">
    <table class="w-full border-collapse">
        <tr class="sticky top-0">
            <th class="p-2 border bg-gray-100"></th>
            {#each dayMinutes as min}
                <td class="text-xs sticky text-center py-1 px-1 border bg-zinc-500 text-white font-bold">
                    <span class="font-digital">{min}</span>

                    <!--{#each events as event}-->
                    <!--    {#if event.day === min && event.hour === 1}-->
                    <!--        {event.event}-->
                    <!--    {/if}-->
                    <!--{/each}-->
                </td>
            {/each}
        </tr>

        {#each dayHours as hour}
            <tr class="border">
                <th class="text-xs py-2 border bg-zinc-700 text-white font-bold">
                    <span class="font-digital ">{hour}</span>
                </th>
                {#each dayMinutes as min}
                    <td class="py-2 border"></td>
                {/each}
            </tr>
        {/each}


    </table>
</div>

<style>
    .font-digital{
        font-family: 'Quantico', sans-serif;
    }
</style>