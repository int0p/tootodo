<script>
    import {Badge, Button, ButtonGroup} from "flowbite-svelte";
    export let state;
    export let timeLeft;
    function getFriendlyTime(minutesIN){
        const hours = (Math.floor(minutesIN / 3600)).toString().padStart(2, '0');
        const minutes = (Math.floor((minutesIN % 3600) / 60)).toString().padStart(2, '0');
        const seconds = (Math.floor(minutesIN % 60)).toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`
    }
    export let controlInTimer;
</script>

<Button color="dark" class="!bg-rose-950 !rounded-2xl border-white border-4 w-full h-full flex-col py-2 space-y-0 divide-y-2"
        on:click={controlInTimer}
>
    <div class="text-center w-full font-digital font-extrabold text-[1.7vw] leading-[1.7vw]">{getFriendlyTime(timeLeft)}</div>
    <div class="text-center text-green-400 w-full font-digital font-extrabold text-[1.7vw] leading-[1.7vw] "> {state}</div>
</Button>
