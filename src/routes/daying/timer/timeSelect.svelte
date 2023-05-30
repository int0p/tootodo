<script>
    import {Hr, Timeline, TimelineItem, Radio, Heading, Badge} from "flowbite-svelte";
    import minimizeFill from '@iconify/icons-mingcute/minimize-fill';
    import addFill from '@iconify/icons-mingcute/add-fill';

    import Icon from '@iconify/svelte';

    export let timeSelected = 0;
    let timeSet = 0;
</script>

<div class="flex-col timeController w-[210px] h-[90px] absolute bottom-0 ">
    <Hr height="h-1"/>
    <div class="flex space-x-1 absolute bottom-4 w-[210px] text-center">
        <button class="flex mb-3 border-0 rounded-lg shadow-md p-1 w-full space-y-2
                focus:ring-4 hover:text-red-900 hover:bg-gray-200 focus:text-white "
                on:click ={()=> timeSet = 5}>
            <Heading tag="h5" class="pr-2 pl-2">5</Heading>
        </button>
        <button class="flex mb-3 border-0 rounded-lg shadow-md p-1 w-full space-y-2
                focus:ring-4 hover:text-red-900 hover:bg-gray-200 focus:text-white "
                on:click ={()=> timeSet = 10}>
            <Heading tag="h5" class="pr-2 pl-2">10</Heading>
        </button>
        <button class="flex mb-3 border-0 rounded-lg shadow-md p-1 w-full space-y-2
                        focus:ring-4 hover:text-red-900 hover:bg-gray-200 focus:text-white "

                on:click ={()=> timeSet = 25}>
            <Heading tag="h5" class="pr-2 pl-2">25</Heading>
        </button>
        <button class="flex mb-3 border-0 rounded-lg shadow-md p-1 w-full space-y-2
                        focus:ring-4 hover:text-red-900 hover:bg-gray-200 focus:text-white "

                on:click ={()=> timeSet = 60}>
            <Heading tag="h5" class="pr-2 pl-2">60</Heading>
        </button>
    </div>

    <div class="flex justify-between absolute -bottom-2 w-[210px] h-[28px] space-x-2 ">
        <Badge small class="w-1/2 !p-0 rounded-md" >
            <button class="w-full text-center text-lg flex justify-center
                            focus:ring-4  focus:ring-blue-200 hover:bg-blue-700 hover:text-white"
                    on:click={()=>timeSelected-= timeSet}>
                <Icon icon={minimizeFill} />

            </button></Badge>
        <Badge color="red" small  class="w-1/2 !p-0 rounded-md " >
            <button class="w-full text-center text-lg flex justify-center
                            focus:ring-4 focus:ring-red-200  hover:bg-red-700 hover:text-white"
                    on:click={()=>timeSelected+= timeSet}>
                <Icon icon={addFill} />
        </button></Badge>
    </div>
</div>
