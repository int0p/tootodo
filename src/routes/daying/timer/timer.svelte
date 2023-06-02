<script context="module">
    ////////////////////   import stores   ////////////////////

    const elements = new Set();

    function putData(timeLeft, timeDone){
        elements.timeLeft = timeLeft;
        elements.timeDone = timeDone;
        // console.log(elements.timeDone);
    }

</script>

<script>
    ////////////////////////////// timer setting //////////////////////////////
    import { onMount} from 'svelte';

    onMount(() => {
        elements.add(timer);
        return () => elements.delete(timer);
    });


    let timer;
    let state;
    let session;
    let timeLeft;
    let timeDone;
    export let classTimer;
    export let mode = "";


    ////////////////////////////// chart setting //////////////////////////////
    import { Doughnut } from 'svelte-chartjs';
    import {
        Chart as ChartJS,
        Title,
        Tooltip,
        Legend,
        ArcElement,
        CategoryScale,
    } from 'chart.js';
    $:{
        data.datasets.data = [timeDone, timeLeft];
        console.log(data.datasets.data);
    }
    ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

    const options = {
        plugins:{
            legend: {
                display: false,
            },
            tooltip:{
                enabled: false,
            },
            title: {
                display: false,
                text: 'Pomodoro',
            },
            responsive: true,
        },
    };

    const data = {
        labels: ['done', 'goal'],
        datasets:[
            {
                label: 'do / Goal',
                data: [0,1],
                backgroundColor: [
                    'rgba(190,24,93, 1)', //bg-pink-700
                    'rgb(157,23,77,0.1)', //bg-pink-800
                ],
                borderColor: [
                    'rgba(190,24,93, 1)',
                    'rgb(157,23,77,0.1)',
                ],
                borderWidth: 1,
                cutout: '80%',
            }
        ]
    }

    const plugin_pomoText = {
        id: 'pomoText',
        beforeDraw(chart, args, options) {
            const { ctx, chartArea: { left, top, width, height } } = chart;
            const textX = left + width / 2;
            const textY = top + height / 2;
            // console.log(width);
            ctx.save();

            // text remain time
            if(mode == "goalTimer"){
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.font = '3rem "Helvetica Neue", Helvetica, Arial, sans-serif';
                ctx.fillStyle = '#000';
                const textRemain = timeLeft ;
                ctx.fillText(textRemain, textX, textY);
                ctx.restore();

                // text timer state
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.font = '2rem "Helvetica Neue", Helvetica, Arial, sans-serif';
                ctx.fillStyle = '#000';
                const text = state;
                ctx.fillText(text, textX, textY+50);
                ctx.restore();
            }
        }
    };
</script>


<!--    <pre>{JSON.stringify({timeLeft}, null,2) }</pre>-->
<Doughnut
        bind:this={timer}
        {data} {options} plugins= {[plugin_pomoText]}
        class={classTimer}
/>


