

<script>
    ////////////////////////////// timer setting //////////////////////////////

    let timer;
    export let state;
    let stateBefore;
    export let timeLeft;
    export let timeDone;
    export let designTimer;
    export let mode = "";


    ////////////////////////////// chart setting //////////////////////////////
    import { Doughnut } from 'svelte-chartjs';
    import { onMount, beforeUpdate, afterUpdate } from 'svelte';
    import {
        Chart as ChartJS,
        Title,
        Tooltip,
        Legend,
        ArcElement,
        CategoryScale,
    } from 'chart.js';
    // export let pomoGoal;
    // $:repeatPerHour = Math.floor(pomoGoal/60);
    // $: console.log(repeatPerHour);

    $:{
        if(mode === "goalTimer"){
            data.datasets[0].cutout = "90%";
        }

        if(state === "WORKING" || state === "BREAKING"){
            if(mode === "hourTimer") {
                timeLeft = Math.floor(timeLeft/60);
                timeDone = Math.floor(timeDone/60) || 1;
                data.datasets[0].data = [timeLeft % 60, 60 - timeLeft % 60];
                // if(repeatPerHour <= 0 ) { //만일 주어진 시간이 130분이라면, 60, 60, 10분 진행하고싶을 경우. (현재 코드는 10, 60, 60순으로 진행함)
                //     data.datasets[0].data = [timeLeft % 60, 60 - timeLeft % 60];
                // }else{
                //     data.datasets[0].data = [60-(timeDone%60),timeDone%60];
                //     if(timeDone%60 === 0) {
                //         repeatPerHour--;
                //         if(state === "BREAKING") repeatPerHour = Math.floor(pomoGoal/60);
                //     }
                // }
            }
            else{
                data.datasets[0].data = [timeDone, timeLeft];
            }
        }else{
            data.datasets[0].data  = [0,1];
        }
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
                cutout: "10%",
            }
        ]
    }

    // const plugin_pomoText = {
    //     id: 'pomoText',
    //     beforeDraw(chart, args, options) {
    //         const { ctx, chartArea: { left, top, width, height } } = chart;
    //         const textX = left + width / 2;
    //         const textY = top + height / 2;
    //         // console.log(width);
    //         ctx.save();
    //
    //         // text remain time
    //         if(mode == "goalTimer"){
    //             ctx.textAlign = 'center';
    //             ctx.textBaseline = 'middle';
    //             ctx.font = '4rem "Helvetica Neue", Helvetica, Arial, sans-serif';
    //             ctx.fillStyle = '#000';
    //             const textRemain = getFriendlyTime(timeLeft) ;
    //             ctx.fillText(textRemain, textX, textY);
    //             ctx.restore();
    //
    //             // text timer state
    //             ctx.textAlign = 'center';
    //             ctx.textBaseline = 'middle';
    //             ctx.font = '2rem "Helvetica Neue", Helvetica, Arial, sans-serif';
    //             ctx.fillStyle = '#000';
    //             const text = state;
    //             ctx.fillText(text, textX, textY+50);
    //             ctx.restore();
    //         }
    //     }
    // };

    function getFriendlyTime(minutesIN){
        const hours = (Math.floor(minutesIN / 3600)).toString().padStart(2, '0');
        const minutes = (Math.floor((minutesIN % 3600) / 60)).toString().padStart(2, '0');
        const seconds = (Math.floor(minutesIN % 60)).toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`
    }
</script>


<!--    <pre>{JSON.stringify({timeLeft}, null,2) }</pre>-->
<Doughnut
        bind:this={timer}
        {data} {options}
        class={designTimer}
/>


