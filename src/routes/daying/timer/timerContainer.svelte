<script>
    import { onMount, onDestroy } from 'svelte';
    import  Clock from '$lib/components/clock.svelte';
    import ClockDesign from "$lib/components/clock-design.svelte"
    import TimerGoal from "./timerForGoal.svelte";
    import TimerStatus from "./timerStatus.svelte";
    import Icon from '@iconify/svelte';
    import addFill from '@iconify/icons-mingcute/add-fill';
    import minimizeFill from '@iconify/icons-mingcute/minimize-fill';

    import {
        Button,Badge,Heading,
    } from 'flowbite-svelte';

    let session = 'projects';

    let timer = null;

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


    import CurrentClock from "./currentTime.svelte";

    import {currentTime} from '$lib/stores/clock.js';
    $:nowString = $currentTime.fullTime;
    export let timeSet;
</script>

<div class="flex w-full items-center justify-center relative h-full">

    <div class="align-col w-[400px]">
        <div class="clock flex relative">
            <TimerGoal {timeSet}/>
            <CurrentClock/>
            <ClockDesign />
        </div>

        <TimerStatus/>


    </div>

</div>



<style lang="scss">
  .align-col{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .timeController{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: stretch;
  }

    .clock {
        color: rgb(50, 50, 50);
        width: 360px;
        height: 250px;
        padding: 10px;
        border-radius: 20%;
        border: 10px solid rgb(55, 55, 55);
        box-shadow: inset 0 0 3px 3px rgba(50, 50, 50, 0.3), inset 0 0 1px 2px rgba(50, 50, 50, 0.2);
        margin: 0 20px;
    }
</style>


