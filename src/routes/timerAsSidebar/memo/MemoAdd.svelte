<svelte:options immutable={true}/>

<script>
import Icon from "@iconify/svelte";
import messageQuestion from '@iconify/icons-mdi/message-question';
import messageQuestionOutline from '@iconify/icons-mdi/message-question-outline';
import bookmarkAddRounded from '@iconify/icons-material-symbols/bookmark-add-rounded';
import bookmarkAddOutlineRounded from '@iconify/icons-material-symbols/bookmark-add-outline-rounded';

import {Alert, Textarea, ToolbarButton, Input} from "flowbite-svelte";
import {v4 as uuid} from "uuid";
import {createEventDispatcher,onDestroy, onMount, beforeUpdate, afterUpdate} from "svelte";

let inputText = "";
let isSave = true;
let isAsk = false;
let currentTime = new Date().toLocaleTimeString('en-US', { timeStyle:'short' });

// onMount(() => {
//     console.log('Mounted');
//     return () => {
//         console.log('Destroyed 2');
//     };
// });
//
// onDestroy(() => {
//     console.log('Destroyed');
// });

//// add memo in component
// export let memos = [];
// function handleAddMemo(){
//     console.log(inputText.$$.ctx[0]);
//     if(!inputText) return;
//     memos = [
//         ...memos,
//         {
//             id : uuid(),
//             title : inputText.$$.ctx[0],
//             save:false,
//             ask:false,
//         }
//     ];
// }

//// add memo in parent page
const dispatch = createEventDispatcher();

function handleAddMemo(){
    const memo = {
        id : uuid(),
        title : inputText,
        save:isSave,
        ask:isAsk,
        date:currentTime,
    };
    // 공백이 있을경우 추가 안함
    const hasOnlySpace = memo.title.trim()==="";
    if(hasOnlySpace) return;
    // dispatch. cancelable으로 입력 된 후 입력 form 초기화
    const isCancelled = dispatch("addMemo", memo,{
        cancelable: true,
    });
    // clearInput();
    if(isCancelled){
        // console.log("event cancelled");
    }
}
export function clearInput(){
//     TODO: inputText.$$.ctx[0] = ""; 이렇게 하면 안되나?
    inputText = "";
    isSave = true;
    isAsk = false;
}

</script>

<form on:submit|preventDefault={handleAddMemo}>
    <label for="chat" class="sr-only">Your message</label>
    <Alert color="dark" class="px-3 py-2">
        <svelte:fragment slot="icon">
            <ToolbarButton color="dark" class="text-gray-500 dark:text-gray-400"
                on:click={()=>{isAsk=!isAsk;}}>

                {#if isAsk}
                    <Icon icon={messageQuestion} width="28"/>
                {:else }
                    <Icon icon={messageQuestionOutline} width="28"/>
                {/if}

                <span class="sr-only">Ask GPT</span>
            </ToolbarButton>

            <ToolbarButton color="dark" class="text-gray-500 dark:text-gray-400"
                on:click={()=>{isSave=!isSave;}}>

                {#if isSave}
                    <Icon icon={bookmarkAddRounded} width="28"/>
                {:else }
                    <Icon icon={bookmarkAddOutlineRounded} width="28"/>
                {/if}

                <span class="sr-only">Store</span>
            </ToolbarButton>

            <Textarea class="mx-4" rows="1" placeholder="Your message..."
                            bind:value={inputText}/>

            <ToolbarButton type="submit" color="blue" class="rounded-full text-blue-600 dark:text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>
                <span class="sr-only">Send message</span>
            </ToolbarButton>

        </svelte:fragment>
    </Alert>
</form>