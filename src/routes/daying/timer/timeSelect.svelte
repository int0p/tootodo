<script>
    import {Hr, Heading, Badge} from "flowbite-svelte";
    import minimizeFill from '@iconify/icons-mingcute/minimize-fill';
    import addFill from '@iconify/icons-mingcute/add-fill';
    import back2Fill from '@iconify/icons-mingcute/back-2-fill';


    import Icon from '@iconify/svelte';

    export let timeSelected = 0;
    let timeSet = 0;
    const timeButtonStyle = "flex h-full mb-3 border-0 rounded-lg shadow-md p-1 w-full space-y-2 focus:ring-4 hover:text-red-900 hover:bg-gray-200 focus:text-white ";
    const timeTextStyle="pr-2 pl-2 text-center self-center";

</script>

<div class="flex-col timeController w-full  h-1/6 absolute bottom-12 ">
    <Hr height="h-1" class="absolute top-2"/>
    <div class="w-full my-3 h-1/2  flex space-x-1 text-center bg-white">
        <button class={timeButtonStyle}
                on:click ={()=> timeSet = 5}>
            <Heading tag="h5" class={timeTextStyle}>5</Heading>
        </button>
        <button class={timeButtonStyle}
                on:click ={()=> timeSet = 10}>
            <Heading tag="h5" class={timeTextStyle}>10</Heading>
        </button>
        <button class={timeButtonStyle}
                on:click ={()=> timeSet = 25}>
            <Heading tag="h5" class={timeTextStyle}>25</Heading>
        </button>
        <button class={timeButtonStyle}
                on:click ={()=> timeSet = 60}>
            <Heading tag="h5" class={timeTextStyle}>60</Heading>
        </button>
    </div>

    <div class="w-full h-1/3 flex justify-between space-x-2 ">
        <Badge color="green" small  class="w-2/12 !p-0 rounded-md " >
            <button class="w-full h-full text-center text-lg flex justify-center focus:ring-4 focus:ring-green-200  hover:bg-green-700 hover:text-white"
                    on:click={()=>timeSelected = 0}>
                <Icon icon={back2Fill} class="self-center"/>
            </button></Badge>
        <Badge small class="w-5/12 !p-0 rounded-md" >
            <button class="w-full h-full text-center text-lg flex justify-center
                            focus:ring-4  focus:ring-blue-200 hover:bg-blue-700 hover:text-white"
                    on:click={()=>timeSelected -= timeSet}>
                <Icon icon={minimizeFill} class="self-center"/>
            </button></Badge>
        <Badge color="red" small  class="w-5/12 !p-0 rounded-md " >
            <button class="w-full h-full text-center text-lg flex justify-center
                            focus:ring-4 focus:ring-red-200  hover:bg-red-700 hover:text-white"
                    on:click={()=>timeSelected+= timeSet}>
                <Icon icon={addFill} class="self-center"/>
        </button></Badge>
    </div>
</div>
