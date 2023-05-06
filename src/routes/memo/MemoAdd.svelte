<script>
import Icon from "@iconify/svelte";
import {Alert, Textarea, ToolbarButton} from "flowbite-svelte";

let inputText = "";
function handleAddMemo(){
    console.log(inputText.$$.ctx[0]);
}
</script>

<form on:submit|preventDefault={handleAddMemo}>
    <label for="chat" class="sr-only">Your message</label>
    <Alert color="dark" class="px-3 py-2">
        <svelte:fragment slot="icon">
            <ToolbarButton color="dark" class="text-gray-500 dark:text-gray-400">
                <Icon icon="mdi:message-question" width="28"/>
                <span class="sr-only">Ask GPT</span>
            </ToolbarButton>
            <ToolbarButton color="dark" class="text-gray-500 dark:text-gray-400">
                <Icon icon="material-symbols:bookmark-add-rounded" width="28"/>
                <span class="sr-only">Store</span>
            </ToolbarButton>

            <Textarea id="chat" class="mx-4" rows="1" placeholder="Your message..."
                            bind:this={inputText}/>
<!--            TODO: flowbite comp로 말고 그냥 textarea하는게 나을듯. -->

            <ToolbarButton type="submit" color="blue" class="rounded-full text-blue-600 dark:text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>
                <span class="sr-only">Send message</span>
            </ToolbarButton>
        </svelte:fragment>
    </Alert>
</form>