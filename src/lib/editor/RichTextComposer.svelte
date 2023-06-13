<script>
  import './editor.css';

  import {
    Composer,
    ContentEditable,
    ToolbarRichText,
    ActionBar,
    RichTextPlugin,
    HistoryPlugin,
    ListPlugin,
    CheckListPlugin,
    HorizontalRulePlugin,
    ImagePlugin,
    TreeViewPlugin,
    CodeNode,
    CodeHighlightNode,
    CodeHighlightPlugin,
    CodeActionMenuPlugin,
    CaptionEditorHistoryPlugin,
  } from 'svelte-lexical';
  import {
    HeadingNode,
    QuoteNode,
    ListNode,
    ListItemNode,
    HorizontalRuleNode,
    ImageNode,
  } from 'svelte-lexical';
  import PlaygroundEditorTheme from './themes/CommentEditorTheme.js';
  import {
    $getRoot as getRoot,
    $createTextNode as createTextNode,
    $createParagraphNode as createParagraphNode,
  } from 'svelte-lexical';

  const initialConfig = {
    theme: PlaygroundEditorTheme,
    nodes: [
      HeadingNode,
      ListNode,
      ListItemNode,
      QuoteNode,
      HorizontalRuleNode,
      ImageNode,
    ],
    onError: (error) => {
      throw error;
    },
    editorState: () => {
      const root = getRoot();
      if (root.getFirstChild() === null) {
        const paragraph = createParagraphNode();
        paragraph.append(
          createTextNode('This demo environment is built with '),
          createTextNode('svelte-lexical').toggleFormat('code'),
          createTextNode('.'),
          createTextNode(' Try typing in '),
          createTextNode('some text').toggleFormat('bold'),
          createTextNode(' with '),
          createTextNode('different').toggleFormat('italic'),
          createTextNode(' formats.'),
        );
        root.append(paragraph);
      }
    },
  };
</script>

<Composer {initialConfig}>
  <div class="editor-shell w-[calc(100%-1rem)] h-[calc(100%-1rem)] my-auto ">
    <ToolbarRichText />
    <div class="editor-container h-[calc(100%-250px)]">
        <div class="editor max-h-[calc(100%-50px)] h-[calc(100%-50px)] bg-white overflow-y-scroll">
          <ContentEditable />
        </div>
      <RichTextPlugin />
      <HistoryPlugin />
      <ListPlugin />
      <CheckListPlugin />
      <HorizontalRulePlugin />
      <ImagePlugin />
      <ActionBar />
    </div>
    <TreeViewPlugin />
  </div>
</Composer>
