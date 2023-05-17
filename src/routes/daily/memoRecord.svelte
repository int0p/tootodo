<script>
    import {Accordion, AccordionItem, Button} from "flowbite-svelte";
    // Record
    let items = [true,false,true]; // [todo,done,memo]
    const openRecordALL = () => items.forEach((_,i)=> items[i] = true);
    const closeRecordALL = () => items.forEach((_,i)=> items[i] = false);
    const resetRecord = () => {items = [true,false,true]};
</script>

<div class="w-full flex-col" >
    <div class="flex justify-end m-2 space-x-1">
        <Button size="lg"  gradient color="blue" on:click={openRecordALL}></Button>
        <Button size="lg"  gradient color="green" on:click={resetRecord}></Button>
        <Button size="lg"  gradient color="red" on:click={closeRecordALL}></Button>
    </div>
    <Accordion multiple>
        <AccordionItem bind:open={items[0]}>
            <span slot="header">Todo</span>
            <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
        </AccordionItem>
        <AccordionItem bind:open={items[1]}>
            <div slot="header">Done</div>
            <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
            <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
            <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
        </AccordionItem>
        <AccordionItem bind:open={items[2]}>
            <div slot="header">Memo</div>
            <p>Something more</p>
        </AccordionItem>
    </Accordion>
</div>