
<script>
    ///////////////// icon  //////////////////
    import Icon from '@iconify/svelte';
    import playCircleOutlineRounded from '@iconify/icons-material-symbols/play-circle-outline-rounded';
    import stopCircleOutlineRounded from '@iconify/icons-material-symbols/stop-circle-outline-rounded';
    import pauseCircleRounded from '@iconify/icons-material-symbols/pause-circle-rounded';
    import timerReset from '@iconify/icons-lucide/timer-reset';
    import repeatRounded from '@iconify/icons-material-symbols/repeat-rounded';

    ///////////////// var //////////////////
    // svg setting
    // circle
    const r = 50;
    const cx = 65;
    const cy = 65;

    // viewbox
    const vw=cx*2;
    const vh=cy*2;

    // component setting
    let lines = [];

    // time
    let currentTime = new Date().toLocaleTimeString('en-US', { timeStyle:'short' });

    ///////////////// code //////////////////
    for (let i = 0; i < 60; i += 1) {
        let line = new AddLine();
        line.time = i;
        line.angle = 6 * i;

        if( i%5 === 0) {
            line.stroke_width = "thick"
            line.text = i.toString();
        }
        lines.push(line);
    }
    // console.log(lines);

    ///////////////// function //////////////////
    //line constructor
    function AddLine(){
        this.time = 0;
        this.angle=0;
        this.text="";
        this.stroke_width="thin";
    }

    //line의 angle에 따라 line의 좌표를 구한다.
    function getLineCoordinates(line) {
        const radians = line.angle * Math.PI / 180;
        const x1 = cx + Math.sin(radians) * r;
        const y1 = cy - Math.cos(radians) * r;
        const x2 = cx + Math.sin(radians) * (r - 0.1*r);
        const y2 = cy - Math.cos(radians) * (r - 0.1*r);
        return { x1, y1, x2, y2 };
    }

    //TODO:line의 angle에 따라 text의 좌표를 구한다.
    function getTextCoordinates(line){
        const radians = line.angle * Math.PI / 180;
        let x = 0;
        let y = 0;
        if(line.angle<=90){
            x = cx + Math.sin(radians) * (r + 0.1*r);
            y = cy - Math.cos(radians) * (r + 0.1*r);
        }else if (line.angle<=180){
            x = cx + Math.sin(radians) * (r + 0.1*r);
            y = cy - Math.cos(radians) * (r + 0.2*r);
        }else if (line.angle<=270){
            x = cx + Math.sin(radians) * (r + 0.3*r);
            y = cy - Math.cos(radians) * (r + 0.2*r);
        }else{
            x = cx + Math.sin(radians) * (r + 0.3*r);
            y = cy - Math.cos(radians) * (r + 0.1*r);
        }
        return { x, y};
    }

</script>


<div class="clock">
    <svg viewBox="0 0 {vw} {vh}">
        <circle {cx} {cy} {r} stroke="black" fill="transparent"  />

<!--        <rect-->
<!--                x="calc({cx} - 0.7 * {r})"-->
<!--                y = "calc({cy} - 0.3 * {r})"-->
<!--                width = "calc({r} * 2 * 0.7)"-->
<!--                height ="calc({r} * 2 * 0.21)"-->
<!--                fill="white"-->
<!--                stroke="black"-->
<!--        ></rect>-->

<!--        <circle {cx} {cy} r="1" stroke="black" fill="transparent" />-->

<!--        <text-->
<!--                x="25"-->
<!--                y = "80"-->
<!--                font-size="8"-->
<!--        >{currentTime}</text>-->
<!--        <text-->
<!--                x="64"-->
<!--                y = "80"-->
<!--                font-size="8"-->
<!--        > - </text>-->
<!--        <text-->
<!--                x="73"-->
<!--                y = "80"-->
<!--                font-size="8"-->
<!--        >{currentTime}</text>-->

        <g transform="translate(50,50)" >
            <Icon icon={playCircleOutlineRounded} width="30"/>
        </g>

        <g transform="translate(5,110)" >
            <Icon icon={timerReset} />
        </g>

        <g transform="translate(110,110)" >
            <Icon icon={repeatRounded} />
        </g>

        {#each lines as line}
            <line
                    x1={getLineCoordinates(line).x1}
                    y1={getLineCoordinates(line).y1}
                    x2={getLineCoordinates(line).x2}
                    y2={getLineCoordinates(line).y2}
                    stroke="black"
                    stroke-width="{line.stroke_width === 'thick' ? 1.5 : 0.5}"
            />
            <text
                    x={getTextCoordinates(line).x}
                    y={getTextCoordinates(line).y}
                    font-size="8"
            >{line.text}</text>
        {/each}
    </svg>
</div>

<style>
.clock {
        color: rgb(50, 50, 50);
        width: 20rem;
        height: 20rem;
        padding: 10px;
        border-radius: 20%;
        border: 15px solid rgb(55, 55, 55);
        box-shadow: inset 0 0 3px 3px rgba(50, 50, 50, 0.3), inset 0 0 1px 2px rgba(50, 50, 50, 0.2);
    }
</style>
