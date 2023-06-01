// 참고 링크: https://svelte.dev/repl/4dc8559756cf491abe7ad8f7189a8873?version=3.38.3
import { readable, derived } from 'svelte/store'

export const current = readable(new Date(), set => {
    const interval = setInterval(() => {
        set(new Date());
    }, 1000);

    return () => clearInterval(interval);
});
export const currentTime = derived(current, $current => {
        let hours = $current.getHours()%12;
        let minutes = $current.getMinutes();
        let seconds = $current.getSeconds();
        let year = $current.getFullYear();
        let month = $current.getMonth()+1;//월 0~11
        let date = $current.getDate(); //일 1~31
        let day = $current.getDay(); //요일 0~6
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const fullTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        const shortTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${ampm}`;
        const shortDate = `${year.toString().padStart(4, '0')}/${month.toString().padStart(2, '0')}/${date.toString().padStart(2, '0')}`;
        return { month, date, day, shortDate, hours, minutes, seconds, fullTime,shortTime };
    }
);

