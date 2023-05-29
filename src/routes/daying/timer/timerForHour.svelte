<script>
    import { onMount,afterUpdate,tick } from 'svelte';
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

    ////////////////////////////// timer setting //////////////////////////////

    //bring context api (70. combining context & stores to make our context reactive)
    import {getContext} from "svelte";
    import timeSetKey from './key.js';
    const timeSetStore = getContext(timeSetKey);
    const defaultTime = $timeSetStore.values.default;
    // let isRunning = false;
    const timeTotal = $timeSetStore.values.working * 60; //외부로부터 목표시간이 변경될 때마다 timeLeft 업데이트.
    $: isRunnning = $timeSetStore.values.isRunning;
    const hours = Math.floor($timeSetStore.values.working/60); //시계 도는 횟수
    const minutes = $timeSetStore.values.working%60;
    // $: console.log(hours, minutes, isRunnning);

    let timeDone = 0;
    // let timeTotal = 0;
    let clear = null;

    // onMount(()=>{
    //     data.datasets[0].data = [minutes, 60 - minutes];
    // })

    // if(minutes < 0 && isRunning){
    //     clear = setInterval(()=>{
    //         minutes--;
    //         data.datasets[0].data = [minutes, 60 - minutes];
    //         if(minutes <= 0){
    //             stopTimer();
    //         }
    //     }, 50)
    // }else{
    //     stopTimer();
    // }

    function startTimer () {

    }
    function stopTimer(){
        clearInterval(clear);
        clear = null;
    }


    // function getFriendlyTime(time){
    //     const hours = (Math.floor(time / 3600)).toString().padStart(2, '0');
    //     const minutes = (Math.floor((time % 3600) / 60)).toString().padStart(2, '0');
    //     const seconds = (Math.floor(time % 60)).toString().padStart(2, '0');
    //     return `${hours}:${minutes}:${seconds}`
    // }
</script>

<Doughnut {data} {options}  class="absolute top-4 scale-[91%]"/>



