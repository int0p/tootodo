<script>
    import { onMount,afterUpdate } from 'svelte';
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
        },
    };

    const data = {
        labels: ['done', 'goal'],
        datasets:[
            {
                label: 'do / Goal',
                data: [0,1],
                backgroundColor: [
                    'rgba(255, 26, 104, 1)',
                    'rgba(255, 26, 104, 0.1)',
                ],
                borderColor: [
                    'rgba(255, 26, 104, 1)',
                    'rgba(54, 162, 235, 0)',
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
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.font = '3rem "Helvetica Neue", Helvetica, Arial, sans-serif';
            ctx.fillStyle = '#000';
            let text = (hours == undefined || minutes == undefined || seconds == undefined || timeLeft <=0 ) ? '00:00:00' : getFriendlyTime(timeLeft);
            ctx.fillText(text, textX, textY);
            ctx.restore();

            if (!timeLeft){
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.font = '2rem "Helvetica Neue", Helvetica, Arial, sans-serif';
                ctx.fillStyle = '#000';
                const text = 'Done!';
                ctx.fillText(text, textX, textY+60);
            }
            ctx.restore();
        }
    };
    ////////////////////////////// timer setting //////////////////////////////
    $: timeSet = 1;
    $: timeDone = 0;
    $: timeLeft = timeSet * 60;

    let hours;
    let minutes;
    let seconds;

    afterUpdate(() => {
        getFriendlyTime(timeLeft);
    });

    function getFriendlyTime(time){
        hours = Math.floor(time / 3600);
        minutes = Math.floor((time % 3600) / 60);
        seconds = Math.floor(time % 60);
        seconds = seconds < 10 ? '0' + seconds : seconds;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        hours = hours < 10 ? '0' + hours : hours;
        return `${hours}:${minutes}:${seconds}`
    }

    function updateCountDown(){
        // console.log(timeLeft)
        timeDone ++;
        timeLeft --;
        // $:console.log(hours, minutes, seconds);
        data.datasets[0].data = [timeDone, timeLeft];

        if(timeLeft <= 0){
            timeDone = timeSet * 60;
            timeLeft = 0;
            stopTimer();
        }
    }

    let isRunning = false;
    let startDisable = false;
    let stopDisable = true;
    let clear;

    function startTimer() {
        isRunning = true;
        startDisable= true;
        clear = setInterval(updateCountDown, 500);
    }
    function stopTimer(){
        isRunning = false;
        startDisable = false;
        stopDisable = true;
        clearInterval(clear);
        clearTimeout(clear);
    }

    function resetTimer() {
        stopTimer();
        timeDone = 0;
        timeLeft = timeSet *60;
        getFriendlyTime(timeLeft);
        data.datasets[0].data = [0, timeSet];
    }
</script>

<Doughnut {data} {options} plugins= {[plugin_pomoText]} />
<input bind:value = {timeSet} type="number" min="0" max="300" />
<button on:click={startTimer} disabled={startDisable}>Start</button>
<button on:click={stopTimer} disable={stopDisable}>Stop</button>
<button on:click={resetTimer}>Reset</button>
