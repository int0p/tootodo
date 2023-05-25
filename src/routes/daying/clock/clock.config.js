
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale,
} from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);
export const plugin_pomoText = {
    id: 'plugin_pomoText',
    beforeDraw(chart, args, options) {
        const { ctx, chartArea: { left, top, width, height } } = chart;
        const textX = left + width / 2;
        const textY = top + height / 2;
        console.log(width);
        ctx.save();
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = '2rem "Helvetica Neue", Helvetica, Arial, sans-serif';
        ctx.fillStyle = '#000';
        const text = 'Pomodoro';
        ctx.fillText(text, textX, textY);
        ctx.restore();

        if (!timeLeft){
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.font = '2rem "Helvetica Neue", Helvetica, Arial, sans-serif';
            ctx.fillStyle = '#000';
            const text = 'Done!';
            ctx.fillText(text, textX, textY+60);
        }
    }
};
export const options = {
    plugins:{
        legend: {
            display: false,
        },
        tooltip:{
            enabled: true,
        },
        title: {
            display: false,
            text: 'Pomodoro',
        },
    },
};

export const data = {
    labels: ['done', 'goal'],
    datasets:[
        {
            label: 'do / Goal',
            data: [0,1],
            backgroundColor: [
                'rgba(255, 26, 104, 1)',
                'rgba(255, 26, 104, 0.1)',
            ],
            borderColor: [
                'rgba(255, 26, 104, 1)',
                'rgba(54, 162, 235, 0)',
            ],
            borderWidth: 1,
            cutout: '80%',
        }
    ]
}