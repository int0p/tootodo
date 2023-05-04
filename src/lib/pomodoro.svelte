<script>
    import { onMount, onDestroy } from 'svelte';
    import  Clock from './clock.svelte';
    import ClockDesign from "./clock-design.svelte"

    import { Alert,
        Heading, P, A, Mark, Secondary, Span,
        Button,
        Hr,
        Toolbar, ToolbarButton,
    } from 'flowbite-svelte';

    let timeLeft = 1500; // 25 minutes in seconds
    let session = 'work';

    let timer = null;

    function startTimer() {
        timer = setInterval(() => {
            timeLeft--;
            if (timeLeft === 0) {
                clearInterval(timer);
                if (session === 'work') {
                    session = 'break';
                    timeLeft = 300; // 5 minutes in seconds
                } else {
                    session = 'work';
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
</script>

<div class="flex justify-center items-center">
    <div class="timeController">
        <Button outline gradient color="purpleToPink">-05</Button>
        <Button outline gradient color="purpleToPink">-10</Button>
        <Button outline gradient color="purpleToPink">-25</Button>
        <Button outline gradient color="purpleToPink">-60</Button>
    </div>
    <ClockDesign />
    <div class="timeController ">
        <Button outline gradient color="pinkToOrange">+05</Button>
        <Button outline gradient color="pinkToOrange">+10</Button>
        <Button outline gradient color="pinkToOrange">+25</Button>
        <Button outline gradient color="pinkToOrange">+60</Button>
    </div>
</div>


<h1>{session === 'work' ? 'Work Session' : 'Break Session'}</h1>
<p>{Math.floor(timeLeft / 60)}:{('0' + (timeLeft % 60)).slice(-2)}</p>
<Button on:click={timer ? stopTimer : startTimer}>{timer ? 'Stop' : 'Start'}</Button>

<style lang="scss">
    .timeController{
      display: flex;
      flex-direction: column;
      margin: 10px;
      width: 4.5rem;
      height: 18rem;
      justify-content: space-between;
      align-items: stretch;

    }
</style>



