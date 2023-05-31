<script>
    import MemoAdd from "./MemoAdd.svelte";
    import MemoList from "./MemoList.svelte";
    import {v4 as uuid} from "uuid";

    export let memos = [
        {
            id : uuid(),
            title : "관람 포인트 \"메인-[타이머]\"",
            save:false,
            ask:true,
            date: "3:11 PM",
        },{
            id : uuid(),
            title : "메모추가! 메모 작성 칸에서 좌측의 아이콘을 누른 상태에 따라 메세지 색과 북마크 표시가 변합니다.",
            save:false,
            ask:false,
            date: "3:11 PM",
        },{
            id : uuid(),
            title : "투두리스트! 북마크한 메모만 보여줍니다. 작성된 메모의 북마크 버튼과 삭제버튼을 눌러보세요.",
            save:true,
            ask:false,
            date: "3:11 PM",
        },{
            id : uuid(),
            title : "토글 타이머! 메모를 적는것에 집중하고 싶을 경우 타이머를 가려보세요.",
            save:true,
            ask:false,
            date: "3:11 PM",
        },{
            id : uuid(),
            title : "사이드바! [타이머]를 가려 각 페이지를 전체 화면에서 볼 수 있습니다.",
            save:false,
            ask:false,
            date: "3:11 PM",
        },{
            id : uuid(),
            title : "관람 포인트 \"시계 아이콘 -[데일리 기록]\"",
            save:true,
            ask:true,
            date: "3:11 PM",
        },{
            id : uuid(),
            title : "파랑초록빨강 버튼! 오늘의 기록을 어떤식으로 볼지 선택할 수 있습니다.",
            save:false,
            ask:false,
            date: "3:11 PM",
        },{
            id : uuid(),
            title : "관람 포인트 \"폴더 아이콘 -[작업 관리]\"",
            save:true,
            ask:true,
            date: "3:11 PM",
        },{
            id : uuid(),
            title : "메모 옆 그라데이션 버튼! 작업이 적힌 사이드 바를 가려 메모만 볼 수 있습니다. ",
            save:false,
            ask:false,
            date: "3:11 PM",
        },
        // {
        //     id : uuid(),
        //     title : "5/3,2023 개발 시작",
        //     save:false,
        //     ask:false,
        //     date: "3:11 PM",
        // },
        // {
        //     id : uuid(),
        //     title : "5/4 시계 svg디자인",
        //     save:true,
        //     ask:false,
        //     date: "2:12 PM",
        // },
        // {
        //     id : uuid(),
        //     title : "5/5 전체 레이아웃 디자인",
        //     save:false,
        //     ask:false,
        //     date: "3:11 PM",
        // },
        // {
        //     id : uuid(),
        //     title : "5/7 메모 추가, 삭제, 토글",
        //     save:false,
        //     ask:false,
        //     date: "2:00 PM",
        // },
        // {
        //     id : uuid(),
        //     title : "5/10 입력 폼 초기화 기능, 라이프 사이클로 show/hide list, scroll 기능 추가",
        //     save:false,
        //     ask:false,
        //     date: "5:11 PM",
        // },
        // {
        //     id : uuid(),
        //     title : "5/11 저장된 메모만 보는 기능 추가(todo)",
        //     save:true,
        //     ask:false,
        //     date: "6:30 PM",
        // },
        // {
        //     id : uuid(),
        //     title : "5/12 타이머 시계 디자인 수정, 라우팅 및 store공부",
        //     save:true,
        //     ask:false,
        //     date: "3:15 PM",
        // },
        // {
        //     id : uuid(),
        //     title : "5/13 타이머 함수 구현, 로딩데이터, contextAPI 공부",
        //     save:true,
        //     ask:false,
        //     date: "3:15 PM",
        // },
        // {
        //     id : uuid(),
        //     title : "5/14 MVVM패턴으로 리펙토링, 로딩데이터 공부",
        //     save:true,
        //     ask:false,
        //     date: "2:10 PM",
        // },
        // {
        //     id : uuid(),
        //     title : "5/18 weekly, projects 1차 레이아웃 구현",
        //     save:true,
        //     ask:false,
        //     date: "2:10 PM",
        // },
    ];
    let memoList;

    import {todoList} from "$lib/stores/useLocStorage.js";

    export let showTimer;

    // handler. TODO: add는 memo전체 받고 remove와 toggle은 id만 받아서 코드가 헷갈림.
    function handlerAddMemo(e){
        e.preventDefault();
        memos = [...memos, e.detail];
        addTodo(e.detail);
        memoList.clearInput();
    }
    function handlerRemoveMemo(e){
        const targetID = e.detail.id;
        memos = memos.filter(memo => memo.id !== targetID);
        removeTodo(targetID);
    }
    function handlerToggleSave(e){
        const targetID = e.detail.id;
        memos = memos.map(memo => {
            if(memo.id === e.detail.id){
                memo.save = !memo.save;
                // memo에 따라 todoList에 추가하거나 삭제한다.
                if(memo.save === false) removeTodo(targetID);
                else {
                    addTodo(memo);
                    // console.log(todoList);
                }
            }
            return memo;
        });
    }
    function addTodo(todo){
        if(todo.save)
            $todoList = [...$todoList, todo];
    }
    function removeTodo(todoID){
        $todoList = $todoList.filter(toodo => toodo.id !== todoID);
    }
    // $: console.log(todoList);
</script>

<!--목표: memoList는 memo를 보여주고, memoAdd는 memo를 추가하는 역할을 한다.-->
<!--현실: memoList에 메모의 북마크를 토글하거나 삭제하는 기능이 있다.-->
<!--TODO: memoList와 memoAdd를 합치거나, 다른 방식으로 나누어야함.-->
{#if showTimer}
    <MemoAdd
            bind:this={memoList}
             on:addMemo={handlerAddMemo}/>

    <MemoList
            {memos}
            bind:showTimer
            on:removeMemo={handlerRemoveMemo}
            on:toggleSave={handlerToggleSave}
    />
{:else}
    <MemoList
            {memos}
            bind:showTimer
            on:removeMemo={handlerRemoveMemo}
            on:toggleSave={handlerToggleSave}
    />
    <MemoAdd
            bind:this={memoList}
            on:addMemo={handlerAddMemo}/>
{/if}