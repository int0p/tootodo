// 참고 블로그: https://velog.io/@heejin-k/Svelte-%EC%8A%A4%EB%B2%A8%ED%8A%B8%EC%97%90%EC%84%9C%EC%9D%98-%EC%A0%84%EC%97%AD%EC%83%81%ED%83%9C%EA%B4%80%EB%A6%AC-Store#6-custom-stores
import { writable} from 'svelte/store';

export const defaultTimerSet = writable({
        values: {
            working: 50,
            breaking:10,
            repeat: 3, //tod o 마지막에 breaking없음
            dayStartTime: "09:00",
            dayEndTime: "24:00",
            alarmSession: true,
            alarmDone: true,
            bgm:null,
            useBgm: false,
        },
    }
);
