<script>

    import Timer from "./timer/+page.svelte";
    import Memo from "./memo/+page.svelte";
    import TimeTable from "../weekly/timeTable.svelte";
    import DoneList from "$lib/components/doneList.svelte";
    let currentDate = new Date();
    import {currentTime} from "$lib/stores/clock.js";
    import {Button, Listgroup, ListgroupItem} from "flowbite-svelte";

    let style_btnWeek = "w-full text-center uppercase mb-2 text-lg font-bold bg-gray-100 py-2 rounded-md hover:bg-gray-200 ";
    let style_btnWeek_Color = "w-full text-center uppercase mb-2 text-lg font-bold py-2 rounded-md hover:bg-rose-700 text-white bg-zinc-700";
    let week = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let showWorksColor = false;
</script>

<div class="flex w-full h-full justify-center items-start space-x-4 my-6">
    <div class="h-full w-1/2 max-w-[1100px] border-4 border-double rounded-lg p-4 ">
        <Timer/>
    </div>

    <div class=" w-1/5 h-full flex-col border-4 border-double rounded-lg p-4 max-w-[440px] min-w-[300px]">
        <div class="flex-col w-full relative gap-y-4 h-full">
            <div class="flex-col justify-start absolute top-0 w-full h-[80px]">
                <button  class={style_btnWeek_Color} >{week[$currentTime.day]}</button>
                <div class="w-full text-center uppercase mb-2 text-lg font-bold ">
                    <div class=" absolute left-0 text-xl font-digital"><span class="text-rose-600">{$currentTime.month}</span> /{$currentTime.date}</div>
                    <div class="text-3xl text-rose-950 font-digital absolute right-0">{$currentTime.shortTime}</div>
                </div>
            </div>

            <div class="absolute h-[calc(100%-80px)] flex-col w-full top-20">
                <div class="w-full h-2/5 absolute top-2"><DoneList/></div>
                <div class="h-3/5 w-full absolute bottom-0"><TimeTable/></div>
                <Button size="xl" gradient color=""
                        class="showWorks absolute bottom-0 right-0 !font-extrabold text-center text-lg !p-2 w-5/12
                                   from-green-500 to-rose-500 bg-gradient-to-br hover:bg-gradient-to-l text-white text-xl"
                        on:mouseenter={() => showWorksColor = !showWorksColor}
                        on:mouseleave={() => showWorksColor = !showWorksColor}
                >
                    <span class="font-digital font-extrabold ">10H 30M</span>
                </Button>

                {#if showWorksColor}
                    <Listgroup class="w-2/5 absolute bottom-0 left-12" active>
                        <ListgroupItem class="flex">
                            <svg aria-hidden="true" class="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path></svg>
                            Share
                        </ListgroupItem>
                        <ListgroupItem class="flex">
                            <svg aria-hidden="true" class="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" clip-rule="evenodd"></path></svg>
                            Print
                        </ListgroupItem>
                        <ListgroupItem class="flex">
                            <svg aria-hidden="true" class="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 00-2 0v1.586l-.293-.293a.999.999 0 10-1.414 1.414l2 2a.999.999 0 001.414 0l2-2a.999.999 0 10-1.414-1.414l-.293.293V9z" fill-rule="evenodd"></path></svg>
                            Save
                        </ListgroupItem>
                        <ListgroupItem class="flex">
                            <svg aria-hidden="true" class="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"></path><path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"></path></svg>
                            Copy
                        </ListgroupItem>
                    </Listgroup>
                {/if}


            </div>

        </div>

    </div>

</div>

<style>
    .font-digital{
        font-family: 'Quantico', sans-serif;
    }
</style>