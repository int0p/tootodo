<script>

    import WorkDetail from "./workDetail.svelte";
    import Status from "./status.svelte";
    import ProjectList from "./projectList.svelte";

</script>
<div class="flex-col m-4 h-full w-[calc(100%-100px)]"> <!--    얘의 width가 full일 때 section모드에서 전체화면에 존재.  -->
<!--        status: ongoing, done, not started, all-->
    <Status /> <!--    h: 80px -->

<!--        projects-->
    <div class = "flex clear-both h-[calc(100%-100px)] ">
        <ProjectList />
        <WorkDetail />
    </div>
</div>


