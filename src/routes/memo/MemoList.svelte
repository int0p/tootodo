<script>
    export let memos = [];
</script>

{#each memos as {id, title},index}
    {@const number = index+1}
    <li>{number}-{title}</li>
{/each}