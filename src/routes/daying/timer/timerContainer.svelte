<script>
    import ClockDesign from "$lib/components/clock-design.svelte"
    import TimerGoal from "./timerForGoal.svelte";
    import TimerHour from "./timerForHour.svelte";

    import TimerStatus from "./timerStatus.svelte";

    import {
        Button, Badge, ButtonGroup,
    } from 'flowbite-svelte';


</script>

<div class="flex w-[300px] items-center justify-center relative h-[380px] top-2 ">

    <div class="!m-0">

        <div class="clock flex relative">
            <TimerGoal />
            <TimerHour />
            <ClockDesign />

            <Badge large color="light" class="w-full h-[50px] flex justify-center absolute bottom-2 left-0">
                <!--                <p><span class="text-pink-800 text-lg">session:</span> </p>-->
                <ButtonGroup class="space-x-px my-1">
                    <Button pill size="sm" color="alternative">Working</Button>
                    <Button pill size="sm" color="alternative">Breaking</Button>
                </ButtonGroup>
            </Badge>
        </div>

    </div>

</div>



<style lang="scss">

    .clock {
        color: rgb(50, 50, 50);
        width: 300px;
        height: 380px;
        padding: 10px 0;
        border-radius: 20%;
        border: 10px solid rgb(55, 55, 55);
        box-shadow: inset 0 0 3px 3px rgba(50, 50, 50, 0.3), inset 0 0 1px 2px rgba(50, 50, 50, 0.2);
        //margin: 20px;
    }
</style>

