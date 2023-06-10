<script>
    import Status from "./status.svelte";
    import ProjectDetail from "./projectDetail.svelte";
    import Note from "./note.svelte";

</script>

<div class="flex m-auto mt-6 h-[calc(100%-1rem)] w-[calc(100%-1rem)] space-x-3"> <!--    얘의 width가 full일 때 section모드에서 전체화면에 존재.  -->
<!--        status: ongoing, done, not started, all-->

<!--        projects-->
        <div class="w-1/3 h-[calc(100%-60px)] flex-col space-y-3">
            <Status /> <!--    h: 40px -->
            <ProjectDetail />
        </div>

        <div class="w-2/3 h-full">
            <Note/>
        </div>
</div>


