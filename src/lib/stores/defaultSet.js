import { readable} from 'svelte/store';

export const defaultTimerSet = readable({values:{
        working: 5,
        breaking:2,
        repeat: 2, //tod o 마지막에 breaking없음

        //todo: 얘넨 전체적인 환경설정이라 나중에 빼야함. -> setting페이지 에서 바꿀 수 있도록
        dayStartTime: "09:00",
        dayEndTime: "24:00"
    }}
    );
