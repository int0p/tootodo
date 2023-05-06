<script>
    import {Alert} from "flowbite-svelte";
    import Icon from "@iconify/svelte";

    export let memos = [];

</script>

{#each memos as {title,ask,save},index}
    {@const number = index+1}
    <!--ask값이 true일땐 gpt와의 대화 모드가 되므로 대화창의 색을 초록으로 바꾼다. -->
    <Alert color ={ ask ? "green" : "yellow"} class="m-4">
       <span slot="icon">
<!--           save값이 true일땐 아이콘을 꽉찬 북마크으로 설정한다. -->
           {#if save}
               <Icon icon="material-symbols:bookmark-rounded" width="22"/>
           {:else}
                <Icon icon="material-symbols:bookmark-outline-rounded" width="22"/>
           {/if}
       </span>
        {number}-{title}
    </Alert>
{/each}