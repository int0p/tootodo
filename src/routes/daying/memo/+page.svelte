<script>
    import MemoAdd from "./MemoAdd.svelte";
    import MemoList from "./MemoList.svelte";
    import {v4 as uuid} from "uuid";

    export let memos = [
        {
            id : uuid(),
            title : "Tㅇo -> DO 잉태 5/3",
            save:false,
            ask:true,
            date: "3:11 PM",
        },
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
    // $: console.log($todoList);
</script>

<!--목표: memoList는 memo를 보여주고, memoAdd는 memo를 추가하는 역할을 한다.-->
<!--현실: memoList에 메모의 북마크를 토글하거나 삭제하는 기능이 있다.-->
<!--TODO: memoList와 memoAdd를 합치거나, 다른 방식으로 나누어야함.-->
<div class="w-full h-full p-4 relative ">
    <div class="w-full absolute top-0 h-[calc(100%-70px)]">
        <MemoList
                {memos}
                on:removeMemo={handlerRemoveMemo}
                on:toggleSave={handlerToggleSave}
        />
    </div>
    <div class="absolute bottom-0 w-full right-0">
        <MemoAdd
                bind:this={memoList}
                on:addMemo={handlerAddMemo}/>
    </div>

</div>
<!--{#if showTimer}-->
<!--    <MemoAdd-->
<!--            bind:this={memoList}-->
<!--             on:addMemo={handlerAddMemo}/>-->

<!--    <MemoList-->
<!--            {memos}-->
<!--            bind:showTimer-->
<!--            on:removeMemo={handlerRemoveMemo}-->
<!--            on:toggleSave={handlerToggleSave}-->
<!--    />-->
<!--{:else}-->
<!--    <MemoList-->
<!--            {memos}-->
<!--            bind:showTimer-->
<!--            on:removeMemo={handlerRemoveMemo}-->
<!--            on:toggleSave={handlerToggleSave}-->
<!--    />-->
<!--    <MemoAdd-->
<!--            bind:this={memoList}-->
<!--            on:addMemo={handlerAddMemo}/>-->
<!--{/if}-->