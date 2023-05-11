<script>
    import MemoAdd from "./MemoAdd.svelte";
    import MemoList from "./MemoList.svelte";
    import {Textarea, Alert, ToolbarButton, Checkbox, Hr, Blockquote} from 'flowbite-svelte'
    import Icon from '@iconify/svelte';
    import {v4 as uuid} from "uuid";

    export let memos = [
        {
            id : uuid(),
            title : "모르겠어요",
            save:false,
            ask:false,
        },
        {
            id : uuid(),
            title : "갑자기 500 internal error",
            save:true,
            ask:false,
        },
        {
            id : uuid(),
            title : "어쨰서죠",
            save:false,
            ask:true,
        },
    ];
    let memoList;
    let savedList = [];
    let showSaved = true;

    function handlerAddMemo(e){
        e.preventDefault();
        memos = [...memos, e.detail];
        if(e.detail.save){
            savedList = [...savedList, e.detail];
            // console.log(savedList);
        }
        memoList.clearInput();
    }
    function handlerRemoveMemo(e){
        memos = memos.filter(memo => memo.id !== e.detail.id);
    }
    function handlerToggleSave(e){
        memos = memos.map(memo => {
            if(memo.id === e.detail.id){
                memo.save = !memo.save;
            }
            return memo;
        })
    }
    $: console.log(memos);
</script>

<!--목표: memoList는 memo를 보여주고, memoAdd는 memo를 추가하는 역할을 한다.-->
<!--현실: memoList에 메모의 북마크를 토글하거나 삭제하는 기능이 있다.-->
<!--TODO: memoList와 memoAdd를 합치거나, 다른 방식으로 나누어야함.-->

<MemoAdd
        {memos}
        bind:this={memoList}
         on:addMemo={handlerAddMemo}/>

<Checkbox bind:checked={showSaved} class="w-full p-4" >Show/Hide Saved Memo</Checkbox>
{#if showSaved}
    <div class="border-2 ml-8 mr-8">
        {#each savedList as sme (sme.id)}
                <Blockquote border bg class="p-2 m-2">
                <p>{sme.title}</p>
                </Blockquote>
        {/each}
    </div>
    <Hr/>

{/if}

<MemoList
        {memos}
        on:removeMemo={handlerRemoveMemo}
        on:toggleSave={handlerToggleSave}/>