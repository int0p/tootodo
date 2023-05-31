<script>
    let week = [10,20,30,40,50,60];
    const startTime_1 = 8; //0시때문에 row구할때 +1함
    let dayHours = Array.from({length: 24}, (_, i) =>(i+startTime_1)%12+1);

    let table = Array.from(Array(week.length), () => Array(dayHours.length).fill(false));
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

    function addEvent(day, hour) {
        let event = prompt('Add new event:');
        if (event) {
            events.push({day, hour, event});
        }
    }
</script>

<div class="w-full h-[calc(100%-360px)] overflow-y-scroll absolute top-[390px]">
    <table class="w-full border-collapse">
        <tr class="sticky top-0">
            <th class="p-1 border bg-pink-50"></th>
            {#each week as day}
                <td on:click={() => addEvent(day, hour)} class="text-xs sticky text-center p-1 border bg-gray-500 text-white font-semibold">
                    {day}
                    {#each events as event}
                        {#if event.day === day && event.hour === hour}
                            {event.event}
                        {/if}
                    {/each}
                </td>
            {/each}
        </tr>

        {#each dayHours as hour}
            <tr class="p-1 border">
                <th class="text-xs p-1 border bg-gray-700 text-white font-semibold">{hour}</th>
                {#each week as day}
                    <td class="p-1 border"></td>
                {/each}
            </tr>
        {/each}


    </table>
</div>
