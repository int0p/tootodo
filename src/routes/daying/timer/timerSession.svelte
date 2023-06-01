<script>
    import {Badge, Button, ButtonGroup} from "flowbite-svelte";
</script>

<Badge large color="light" class="w-full h-[50px] flex justify-center absolute bottom-2 left-0">
    <ButtonGroup class="space-x-px my-1">
        <Button pill size="sm" color="alternative">Working</Button>
        <Button pill size="sm" color="alternative">Breaking</Button>
    </ButtonGroup>
</Badge>