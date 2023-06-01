<script context="module">
    const elements = new Set();

    export function stopTimer(state, timeLeft){
        //reset, next를 누르면 타이머 자체도 초기화해야함.
        //stop이면 타이머 일시정지.
        // console.log(timeLeft);
        elements.forEach((element) => {
            clearInterval(element.interval);
        });
    }
    export function startTimer(state, timeLeft){
        //session에 따라 다른 시간에 대해 동작
        // console.log(timeLeft);

        // elements.forEach((element) => {
        //     element.interval = setInterval(() => {
        //         element.timeLeft -= 1000;
        //         if (element.timeLeft <= 0) {
        //             element.timeLeft = 0;
        //             clearInterval(element.interval);
        //         }
        //     }, 1000);
        // });
    }
</script>

<script>
    ////////////////////////////// timer setting //////////////////////////////
    import { onMount } from 'svelte';
    let timer;
    onMount(() => {
        elements.add(timer);
        return () => elements.delete(timer);
    });
    export let timeDone;
    export let timeLeft ;
    $: console.log(timeLeft);

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
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.font = '2.8rem "Helvetica Neue", Helvetica, Arial, sans-serif';
            ctx.fillStyle = '#000';
            let textRemain = timeLeft;
            ctx.fillText(textRemain, textX, textY);
            ctx.restore();

            // text timer state
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.font = '2rem "Helvetica Neue", Helvetica, Arial, sans-serif';
            ctx.fillStyle = '#000';
            const text = "HI";
            ctx.fillText(text, textX, textY+50);
            ctx.restore();
        }
    };
</script>


<!--    <pre>{JSON.stringify({timeLeft}, null,2) }</pre>-->
<Doughnut {data} {options} plugins= {[plugin_pomoText]} class="relative w-full flex top-2 scale-[65%]"/>


