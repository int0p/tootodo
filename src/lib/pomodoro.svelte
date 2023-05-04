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

<ClockDesign />

<h1>{session === 'work' ? 'Work Session' : 'Break Session'}</h1>
<p>{Math.floor(timeLeft / 60)}:{('0' + (timeLeft % 60)).slice(-2)}</p>
<Button on:click={timer ? stopTimer : startTimer}>{timer ? 'Stop' : 'Start'}</Button>



