<script>
import {Badge, Button, ButtonGroup, Heading} from "flowbite-svelte";
</script>

<div class="flex-col space-x-2 mt-4 justify-evenly w-full relative bottom-0 left-4 ">
    <Badge large color="dark" class="w-[calc(100%-1.5rem)] flex justify-center space-x-4 ">
        <p><span class="text-pink-800 text-lg">session:</span> </p>
        <ButtonGroup class="space-x-px my-1">
            <Button pill size="xs" color="alternative">Working</Button>
            <Button pill size="xs" color="alternative">Breaking</Button>
        </ButtonGroup>
    </Badge>

    <div class="flex  space-x-8 justify-start">
        <p><span class="text-pink-800 text-lg">goal: </span> 00:00:12 - 00:00:52 </p>
        <p><span class="text-pink-800 text-lg"> -> </span>  </p>
        <p><span class="text-pink-800 text-lg">fin: </span> 00:01:52 </p>
    </div>
</div>

