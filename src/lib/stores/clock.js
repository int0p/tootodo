// 참고 링크: https://svelte.dev/repl/4dc8559756cf491abe7ad8f7189a8873?version=3.38.3
import { readable, derived } from 'svelte/store'

export const current = readable(new Date(), set => {
    const interval = setInterval(() => {
        set(new Date());
    }, 1000);

    return () => clearInterval(interval);
});
export const currentTime = derived(current, $current => {
        let hours = ($current.getHours()%12).toString().padStart(2, '0');
        let minutes = $current.getMinutes().toString().padStart(2, '0');
        let seconds = $current.getSeconds().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const fullTime = `${hours}:${minutes}:${seconds}`;
        const shortTime = `${hours}:${minutes} ${ampm}`;
        return { hours, minutes, seconds, fullTime, shortTime };
    }
);