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
            title : "힘들어요",
            save:false,
            ask:false,
        },
        {
            id : uuid(),
            title : "어쨰서요",
            save:false,
            ask:false,
        },
    ]
</script>

<MemoAdd>

</MemoAdd>

<MemoList memos={memos}>

</MemoList>