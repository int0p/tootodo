// 참고 링크: https://svelte.dev/repl/4dc8559756cf491abe7ad8f7189a8873?version=3.38.3
import { readable, derived } from 'svelte/store'


export const current = readable(new Date(), set => {
    const interval = setInterval(() => {
        set(new Date());
    }, 1000);

    return () => clearInterval(interval);
});
export const currentTime = derived(current, $current => {
    const hours = $current.getHours();
    const minutes = $current.getMinutes();
    const seconds = $current.getSeconds();
    return {hours, minutes, seconds};
});