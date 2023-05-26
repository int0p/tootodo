<script>
    import { onMount,afterUpdate } from 'svelte';
    import Icon from '@iconify/svelte';
    import timerReset from '@iconify/icons-lucide/timer-reset';
    import { Toolbar, ToolbarButton, ToolbarGroup,Input, Label } from 'flowbite-svelte';
    import playFill from '@iconify/icons-mingcute/play-fill';
    import stopFill from '@iconify/icons-mingcute/stop-fill';
    import skipForwardFill from '@iconify/icons-mingcute/skip-forward-fill';
    import deleteBackFill from '@iconify/icons-mingcute/delete-back-fill';
    import pauseFill from '@iconify/icons-mingcute/pause-fill';


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
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.font = '1.8rem "Helvetica Neue", Helvetica, Arial, sans-serif';
            ctx.fillStyle = '#000';

            let textRemain = timeDisplay;
            ctx.fillText(textRemain, textX, textY);
            ctx.restore();

            if (timeSet <= 0){
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.font = '1.3rem "Helvetica Neue", Helvetica, Arial, sans-serif';
                ctx.fillStyle = '#000';
                const text = "!! time < 0";
                ctx.fillText(text, textX, textY+30);
            }
            ctx.restore();

            if (!timeLeft){

            }
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.font = '1.2rem "Helvetica Neue", Helvetica, Arial, sans-serif';
            ctx.fillStyle = '#000';
            const text = timerState;
            ctx.fillText(text, textX, textY+30);
            ctx.restore();
        }
    };
    ////////////////////////////// timer setting //////////////////////////////
    export let timeSet; //분 단위 외부 입력
    $: timeDone = 0;
    $: timeLeft = timeSet * 60;

    let defaultTime;
    onMount(()=>{
        defaultTime = timeSet;
    })

    let timeDisplay;
    let timerState = "ready?";

    afterUpdate(() => {
        if(timeSet <= 0){
            // timeDisplay= '-'+getFriendlyTime(Math.abs(timeLeft));
            timeSet = defaultTime;
            return resetTimer();
        }
        else timeDisplay = getFriendlyTime(timeLeft);
    });

    function getFriendlyTime(time){
        const hours = (Math.floor(time / 3600)).toString().padStart(2, '0');
        const minutes = (Math.floor((time % 3600) / 60)).toString().padStart(2, '0');
        const seconds = (Math.floor(time % 60)).toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`
    }

    function updateCountDown(){
        // console.log(timeLeft)
        timeDone ++;
        timeLeft --;
        // $:console.log(hours, minutes, seconds);
        data.datasets[0].data = [timeDone, timeLeft];

        if(timeLeft <= 0){
            stopTimer();
        }
    }

    let startDisable = false;
    let stopDisable = true;
    let clear;

    function startTimer() {
        startDisable= true;
        clear = setInterval(updateCountDown, 50);
        timerState = "working~";
        if(timeLeft <= 0){
            resetTimer();
        }
    }
    function stopTimer(){
        if(timeLeft <= 0){
            timerState = "Done!";
        }else{
            timerState = "-stopped-";
        }
        startDisable = false;
        stopDisable = true;
        clearInterval(clear);
        clearTimeout(clear);
    }

    function resetTimer() {
        stopTimer();
        timerState = "ready?"
        timeDone = 0;
        timeLeft = defaultTime *60;
        timeDisplay = getFriendlyTime(timeLeft);
        data.datasets[0].data = [0, defaultTime];
    }


</script>

<div class="z-10 relative w-full flex">
<!--    <Input let:props class="w-1/3">-->
<!--        <div slot="left">#</div>-->
<!--        <input bind:value = {timeSet} type="number" {...props} min="0" max="300" />-->
<!--    </Input>-->
    <div class="flex absolute left-4 bottom-0 shadow-sm ">
        <Toolbar>
            <ToolbarButton  on:click={resetTimer}><Icon icon={skipForwardFill} hFlip={true} /></ToolbarButton>
            {#if startDisable}
                <ToolbarButton on:click={stopTimer} disable={stopDisable}><Icon icon={pauseFill} /></ToolbarButton>
            {:else}
                <ToolbarButton on:click={startTimer} disabled={startDisable}><Icon icon={playFill} /></ToolbarButton>
            {/if}
            <ToolbarButton on:click={resetTimer}><Icon icon={skipForwardFill} /></ToolbarButton>
        </Toolbar>
    </div>

    <Doughnut {data} {options} plugins= {[plugin_pomoText]} class="absolute right-0"/>
</div>


