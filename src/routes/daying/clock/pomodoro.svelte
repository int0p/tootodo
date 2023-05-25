<script>
    import { onMount, onDestroy } from 'svelte';
    import  Clock from '$lib/components/clock.svelte';
    import ClockDesign from "$lib/components/clock-design.svelte"

    import {
        Button,Badge,Heading,
    } from 'flowbite-svelte';

    let timeLeft = 1500; // 25 minutes in seconds
    let session = 'projects';

    let timer = null;

    function startTimer() {
        timer = setInterval(() => {
            timeLeft--;
            if (timeLeft === 0) {
                clearInterval(timer);
                if (session === 'projects') {
                    session = 'break';
                    timeLeft = 300; // 5 minutes in seconds
                } else {
                    session = 'projects';
                    timeLeft = 1500; // 25 minutes in seconds
                }
            }
        }, 1000);
    }

    function stopTimer() {
        clearInterval(timer);
        timer = null;
    }

    onMount(() => {
        startTimer();
    });

    onDestroy(() => {
        stopTimer();
    });

    import CurrentClock from "./clock.svelte";

    import {currentTime} from '$lib/stores/clock.js';
    $:nowString = $currentTime.fullTime;
</script>

<div class="flex w-full items-center justify-center">

    <div class="align-col w-[400px]">
        <div class="clock flex">
            <CurrentClock/>
            <ClockDesign />
        </div>
<!--        <Heading tag="h4" class=""><span class="text-pink-800">current time:</span> {currentTimeString}</Heading>-->

        <div class="flex space-x-2 mt-4 justify-evenly w-full">
            <Badge large color="pink" class="w-[130px] ml-5">{Math.floor(timeLeft / 60)}:{('0' + (timeLeft % 60)).slice(-2)}</Badge>
            <div class="flex-col w-[200px]">
                <p><span class="text-pink-800">session:</span> work </p>
<!--                <p><span class="text-pink-800">goal:</span> {nowString} - {nowString} </p>-->
            </div>
        </div>
    </div>

    <div class="flex-col timeController w-[110px] h-[324px] ">
        {#each Array(6) as _ ,i}
            <div class="flex mb-3 border-0 rounded-lg shadow-md p-1 w-full">
                <Badge large >-</Badge>
                <Heading tag="h5" class="pr-2 pl-2">{ (i+1) * 10}</Heading>
                <Badge color="red" large >+</Badge>
            </div>
        {/each}
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


