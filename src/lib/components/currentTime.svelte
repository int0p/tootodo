<script>
    import {currentTime} from '$lib/stores/clock.js';
    $: hours = $currentTime.hours;
    $: minutes = $currentTime.minutes;
    $:seconds = $currentTime.seconds;
    $:fullTime=$currentTime.fullTime;
</script>

<svg viewBox='-50 -40 100 100'  class="absolute -top-2 left-2 w-[calc(100%-230px)]">
    <circle class='clock-face' r='38'/>

    <!-- markers -->
    {#each [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55] as minute}
        <line
                class='major'
                y1='32'
                y2='38'
                transform='rotate({30 * minute})'
        />

        {#each [1, 2, 3, 4] as offset}
            <line
                    class='minor'
                    y1='33'
                    y2='38'
                    transform='rotate({6 * (minute + offset)})'
            />
        {/each}
    {/each}

    <!-- hour hand -->
    <line
            class='hour'
            y1='2'
            y2='-15'
            transform='rotate({30 * hours + minutes / 2})'
    />

    <!-- minute hand -->
    <line
            class='minute'
            y1='4'
            y2='-23'
            transform='rotate({6 * minutes + seconds / 10})'
    />

    <!-- second hand -->
    <g transform='rotate({6 * seconds})'>
        <line class='second' y1='10' y2='-30'/>
        <line class='second-counterweight' y1='10' y2='2'/>
    </g>

    <text
            x="-36"
            y = "60"
            font-size="18"
    >{fullTime}</text>
</svg>

<style>

    :global(svg) {
        height: 100%;
    }

    .clock-face {
        stroke: #333;
        fill: white;
    }

    .minor {
        stroke: #999;
        stroke-width: 0.5;
    }

    .major {
        stroke: #333;
        stroke-width: 1;
    }

    .hour {
        stroke: #333;
    }

    .minute {
        stroke: #666;
    }

    .second, .second-counterweight {
        stroke: rgb(180,0,0);
    }

    .second-counterweight {
        stroke-width: 3;
    }
</style>