<script>
    import { onMount, onDestroy } from 'svelte';
    import  Clock from '$lib/components/clock.svelte';
    import ClockDesign from "$lib/components/clock-design.svelte"

    import {
        Button,Badge,
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

    let currentTime = new Date().toLocaleTimeString('en-US', { timeStyle:'short' });
</script>

<div class="flex justify-center items-center">
    <div class="timeController">
        <Button outline gradient color="cyanToBlue">-05</Button>
        <Button outline gradient color="cyanToBlue">-05</Button>
        <Button outline gradient color="cyanToBlue">-05</Button>
        <Button outline gradient color="cyanToBlue">-05</Button>
        <Button outline gradient color="cyanToBlue">-05</Button>
        <Button outline gradient color="cyanToBlue">-05</Button>
    </div>
    <div class="flex-col">
        <ClockDesign />
        <div class="flex space-x-2 mt-4 justify-around">
            <Badge large color="pink" class="w-[100px]">{Math.floor(timeLeft / 60)}:{('0' + (timeLeft % 60)).slice(-2)}</Badge>
            <div class="flex-col">
                <p><span class="text-pink-800">current time:</span> {currentTime}</p>
                <p><span class="text-pink-800">goal: </span> {currentTime} - {currentTime}</p>
            </div>
        </div>
    </div>
    <div class="timeController ">
        <Button outline gradient color="pinkToOrange">+05</Button>
        <Button outline gradient color="pinkToOrange">+10</Button>
        <Button outline gradient color="pinkToOrange">+25</Button>
        <Button outline gradient color="pinkToOrange">+25</Button>
        <Button outline gradient color="pinkToOrange">+60</Button>
        <Button outline gradient color="pinkToOrange">+60</Button>
    </div>
</div>



<style lang="scss">
  .timeController{
    display: flex;
    flex-direction: column;
    margin: 10px;
    width: 4.5rem;
    height: 25rem;
    justify-content: space-between;
    align-items: stretch;
  }
</style>



