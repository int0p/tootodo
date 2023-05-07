<script>
    import MemoAdd from "./MemoAdd.svelte";
    import MemoList from "./MemoList.svelte";
    import { Textarea, Alert, ToolbarButton } from 'flowbite-svelte'
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
    function handlerAddMemo(e){
        memos = [...memos, e.detail];
    }

    $: console.log(memos);
</script>

<MemoAdd {memos} on:addMemo={handlerAddMemo}>

</MemoAdd>

<MemoList bind:memos>

</MemoList>