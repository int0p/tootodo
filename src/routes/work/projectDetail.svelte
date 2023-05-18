<script>

  import MemoList from "./ListMemo.svelte";
  import WorkList from "./ListWork.svelte";

  let toggleMemo = true;
</script>

<div class="flex h-[calc(100vh-310px)] w-full overflow-x-hidden ">
  <WorkList/>
<!--  TODO: media size에 따라 memo와 work를 한방에 보일지, 사이드 바 느낌으로 보일지 결정.-->

  <!--{#if toggleMemo}-->
  <!--  <MemoList/>-->
  <!--{:else}-->
  <!--{/if}-->
  <MemoList/>
</div>
