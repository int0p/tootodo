<script>
    import { onMount, onDestroy } from 'svelte'
    import { Editor } from '@tiptap/core'
    import StarterKit from '@tiptap/starter-kit'
    import { Badge,Button } from 'flowbite-svelte';

    let element
    let editor

    onMount(() => {
        editor = new Editor({
            element: element,
            extensions: [
                StarterKit,
            ],
            content: '<p>Hello World! 🌍️ </p>',
            onTransaction: () => {
                // force re-render so `editor.isActive` works as expected
                editor = editor
            },
        })
    })

    onDestroy(() => {
        if (editor) {
            editor.destroy()
        }
    })
</script>

<div class="h-[calc(100%-70px)] border-4 border-purple-100 flex-col overflow-x-hidden ">
    {#if editor}
        <Badge
                on:click={() => editor.chain().focus().toggleHeading({ level: 1}).run()}
        >
            <div  class:active={editor.isActive('heading', { level: 1 })}>H1</div>
        </Badge>
        <Badge
                on:click={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        >
            <div class:active={editor.isActive('heading', { level: 2 })}>H2</div>
        </Badge>
        <Badge on:click={() => editor.chain().focus().setParagraph().run()} >
            <div class:active={editor.isActive('paragraph')}>P</div>
        </Badge>
    {/if}

    <div bind:this={element} class="w-full h-[calc(100%-1rem)]"/>
</div>

<style>
    button.active {
        background: black;
        color: white;
    }
</style>