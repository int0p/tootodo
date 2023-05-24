<!--한바퀴가 한시간인 원이 있다. 90도를 0으로 두었을 때, 0에서 시작하는 막대기를 직접 돌릴 수 있는 프로그램을 만들어달라.-->
<!--막대기는 내가 막대기를 클릭하고, 클릭한 상태로 돌리다가 클릭을 그만두면 멈춘다. -->
<!--막대기가 돌아간 경로는 표시되어야한다. -->

<script>
    let angle = 0;
    let isDragging = false;
    const stickLength = 150;

    let pomodoroTime = 25 * 60;
    let timeRemaining = pomodoroTime;
    let isTimerRunning = false;
    let timerInterval = null;

    function handleMouseDown() {
        isDragging = true;
    }

    function handleMouseUp() {
        isDragging = false;
    }

    function handleMouseMove(event) {
        if (!isDragging) return;

        const rect = event.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = event.clientX - centerX;
        const mouseY = event.clientY - centerY;
        const mouseDistance = Math.sqrt(mouseX ** 2 + mouseY ** 2);
        const stickAngle = Math.atan2(-mouseY, mouseX) * 180 / Math.PI;
        const stickX = Math.cos(stickAngle * Math.PI / 180) * stickLength;
        const stickY = Math.sin(stickAngle * Math.PI / 180) * stickLength;
        const closestPointX = stickX * mouseDistance / stickLength;
        const closestPointY = stickY * mouseDistance / stickLength;
        angle = Math.atan2(-closestPointY, closestPointX) * 180 / Math.PI;

        const minutes = Math.round((angle / 360) * 60);
        pomodoroTime = minutes * 60;
        timeRemaining = pomodoroTime;
    }

    function startTimer() {
        if (!isTimerRunning) {
            isTimerRunning = true;
            timerInterval = setInterval(() => {
                timeRemaining--;
                if (timeRemaining <= 0) {
                    clearInterval(timerInterval);
                    isTimerRunning = false;
                    timeRemaining = 0;
                }
            }, 1000);
        }
    }

    function resetTimer() {
        clearInterval(timerInterval);
        isTimerRunning = false;
        pomodoroTime = 25 * 60;
        timeRemaining = pomodoroTime;
        angle = 0;
    }
</script>

<style>
    .circle {
        fill: none;
        stroke: black;
        stroke-width: 10;
    }

    .stick {
        stroke: red;
        stroke-width: 20;
    }

    .path {
        fill: none;
        stroke: blue;
        stroke-width: 5;
    }

    .timer {
        font-size: 3rem;
        text-anchor: middle;
        dominant-baseline: central;
    }
</style>

<svg width="400" height="400" viewBox="-200 -200 400 400"
     on:mousedown={handleMouseDown}
     on:mouseup={handleMouseUp}
     on:mousemove={handleMouseMove}>
    <circle class="circle" cx="0" cy="0" r="180" />
    <line class="stick" x1="0" y1="0" x2="0" y2={`-${stickLength}`} transform={`rotate(${angle})`} />

    <path class="path" d={`M 0 0 L 0 -${stickLength} A ${stickLength} ${stickLength} 0 ${angle > 180 ? 1 : 0} 1 ${stickLength * Math.sin(angle * Math.PI / 180)} ${-stickLength * Math.cos(angle * Math.PI / 180)} Z`} />

    <text class="timer" x="0" y="-50">{timeRemaining}</text>
</svg>

<button on:click={startTimer}>Start</button>
<button on:click={resetTimer}>Reset</button>