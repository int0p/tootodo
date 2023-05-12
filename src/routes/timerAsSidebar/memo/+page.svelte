<script>
    import MemoAdd from "./MemoAdd.svelte";
    import MemoList from "./MemoList.svelte";
    import {Textarea, Alert, ToolbarButton, Checkbox, Hr, Blockquote} from 'flowbite-svelte'
    import {v4 as uuid} from "uuid";

    export let memos = [
        {
            id : uuid(),
            title : "5/3,2023 개발 시작",
            save:false,
            ask:false,
            date: "3:11 PM",
        },
        {
            id : uuid(),
            title : "5/4 시계 svg디자인",
            save:true,
            ask:false,
            date: "2:12 PM",
        },
        {
            id : uuid(),
            title : "5/5 전체 레이아웃 디자인",
            save:false,
            ask:false,
            date: "3:11 PM",
        },
        {
            id : uuid(),
            title : "5/7 메모 추가, 삭제, 토글",
            save:false,
            ask:false,
            date: "2:00 PM",
        },
        {
            id : uuid(),
            title : "5/10 입력 폼 초기화 기능, 라이프 사이클로 show/hide list, scroll 기능 추가",
            save:false,
            ask:false,
            date: "5:11 PM",
        },
        {
            id : uuid(),
            title : "5/11 저장된 메모만 보는 기능 추가(todo)",
            save:true,
            ask:false,
            date: "6:30 PM",
        },
        {
            id : uuid(),
            title : "5/12 타이머 시계 디자인 수정, 라우팅 및 store공부",
            save:true,
            ask:false,
            date: "3:15 PM",
        },
        {
            id : uuid(),
            title : "5/13 타이머 함수 구현, 로딩데이터, contextAPI 공부",
            save:true,
            ask:false,
            date: "3:15 PM",
        },
        {
            id : uuid(),
            title : "5/14 MVVM패턴으로 리펙토링, 로딩데이터 공부",
            save:true,
            ask:false,
            date: "2:10 PM",
        },
    ];
    let memoList;
    export let todoList = [];

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
            todoList = [...todoList, todo];
    }
    function removeTodo(todoID){
        todoList = todoList.filter(toodo => toodo.id !== todoID);
    }
    // $: console.log(todoList);
</script>

<!--목표: memoList는 memo를 보여주고, memoAdd는 memo를 추가하는 역할을 한다.-->
<!--현실: memoList에 메모의 북마크를 토글하거나 삭제하는 기능이 있다.-->
<!--TODO: memoList와 memoAdd를 합치거나, 다른 방식으로 나누어야함.-->

<MemoAdd
        bind:this={memoList}
         on:addMemo={handlerAddMemo}/>


<MemoList
        {memos}
        {todoList}
        on:removeMemo={handlerRemoveMemo}
        on:toggleSave={handlerToggleSave}/>