<script>
    import { onMount,afterUpdate,tick } from 'svelte';
    import TimerHour from "./timerForHour.svelte";
    import ClockDesign from "$lib/components/clock-design.svelte";
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
            let textRemain = getFriendlyTime(timeLeft);
            ctx.fillText(textRemain, textX, textY);
            ctx.restore();

            // text timer state
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.font = '2rem "Helvetica Neue", Helvetica, Arial, sans-serif';
            ctx.fillStyle = '#000';
            const text = timerState;
            ctx.fillText(text, textX, textY+50);
            ctx.restore();
        }
    };
    ////////////////////////////// timer setting //////////////////////////////
    // let session = 'projects';

    // let timer = null;

    // function startTimer() {
    //     timer = setInterval(() => {
    //         timeLeft--;
    //         if (timeLeft === 0) {
    //             clearInterval(timer);
    //             if (session === 'projects') {
    //                 session = 'break';
    //                 timeLeft = 300; // 5 minutes in seconds
    //             } else {
    //                 session = 'projects';
    //                 timeLeft = 1500; // 25 minutes in seconds
    //             }
    //         }
    //     }, 1000);
    // }

    // function stopTimer() {
    //     clearInterval(timer);
    //     timer = null;
    // }

    //bring context api (70. combining context & stores to make our context reactive)
    import {getContext} from "svelte";
    import {currentWorkKey, defaultSetKey} from './key.js';

    const defaultTimerSetStore = getContext(defaultSetKey);
    const currentWorkStore = getContext(currentWorkKey);

    let clear = null;
    let timeDone = 0;
    let timeLeft = 0;
    $: timerState = $currentWorkStore.values.state || "ready?";
    $: isRunning = $currentWorkStore.values.isRunning || false;


    onMount()
    {
        // timerOperation();
    }
    function timerOperation(){
        if(isRunning){
            stopTimer(timerState);
        }else{
            startTimer(timerState);
        }
    }

    function startTimer(state){
        isRunning = true;
        console.log("start    "+ state);
        if(state === "WORKING"){
            timerState = "working~";
            timeLeft = $currentWorkStore.values.curGoalTime * 60;
        }else if(state === "BREAKING"){
            timeLeft = $defaultTimerSetStore.values.breaking * 60;
        }

        clear = setInterval(()=>{
            timeDone ++;
            timeLeft --;
            data.datasets[0].data = [timeDone, timeLeft];
            if(timeLeft <= 0){
                stopTimer(state);
            }
        }, 1000);

    }
    function stopTimer(state){

    }



    // $: timeLeft = defaultWorkingTime* 60; //외부로부터 목표시간이 변경될 때마다 timeLeft 업데이트.
    // $: console.log(timeLeft);
    //


    // let playDisable = false;
    //
    // onMount(()=>{
    //     resetTimer();
    // })
    //
    // afterUpdate(() => {
    //     if(timeLeft < 0){ //목표시간이 음수일 경우 타이머 초기화
    //         resetTimer();
    //     }
    // });
    // function resetTimer() {
    //     stopTimer();
    //     timerState = "ready?"
    //     timeDone = 0;
    //     timeLeft = defaultWorkingTime;
    //     playDisable = false; //시간 끝난후엔 reset버튼 누르기 전까지 타이머 실행 안하도록하려구.
    //     timeLeft = defaultWorkingTime;
    //     data.datasets[0].data = [0, timeLeft];
    // }
    // export let isRunning = false;
    // function startTimer() {
    //     isRunning = true;
    //     timerState = "working~";
    //     clear = setInterval(()=>{
    //         timeDone ++;
    //         timeLeft --;
    //         data.datasets[0].data = [timeDone, timeLeft];
    //         if(timeLeft <= 0){
    //             stopTimer();
    //             playDisable = true;
    //         }
    //     }, 1000);
    // }
    // function stopTimer(){
    //     isRunning = false;
    //     if(timeLeft === 0){
    //         timerState = "Done!";
    //     }else{
    //         timerState = "-stopped-";
    //     }
    //     clearInterval(clear);
    //
    //     // clearTimeout(clear);
    // }
    //
    function getFriendlyTime(time){
        const hours = (Math.floor(time / 3600)).toString().padStart(2, '0');
        const minutes = (Math.floor((time % 3600) / 60)).toString().padStart(2, '0');
        const seconds = (Math.floor(time % 60)).toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`
    }

</script>


<!--    <pre>{JSON.stringify({timeLeft}, null,2) }</pre>-->
<Doughnut {data} {options} plugins= {[plugin_pomoText]} class="relative w-full flex top-2 scale-[65%]"/>


