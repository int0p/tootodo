<script>
    import {Heading,} from "flowbite-svelte";
    import Card from "$lib/components/card.svelte";
    let list =[
        // { img: { src: "/images/profile-picture-1.webp", alt: "Neil Sims",},
        //     name: "Neil Sims", email: "email@windster.com", value: "$320"
        // },
        { img: { src: "https://images.unsplash.com/photo-1610534440162-e0e68fbdeca3?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=4800", },
            name: "Memo", email: "detaildetaildetaetaildetaildetaildetaildetaildetaildetaildetaildetail", value: "2023-05-17"
        },

    ]
    export let fullMemo;
    $: console.log(fullMemo);
</script>

<!--        MEMO-->
<div class="flex-col justify-center items-center float-right bottom-0 right-0 relative h-full" class:fullSize={fullMemo}>
    <Heading tag="h4" class="m-4 ">Memo</Heading>

    <div class="ml-4 max-h-[calc(100%-100px)] overflow-y-auto overflow-x-hidden w-full relative" >
        {#each Array(6) as _}
            <Card/>
        {/each}
    </div>

    <!--  Memo setting-->
    <div class="flex h-[56px] justify-around border-t-2 absolute w-full bottom-0 right-0 bg-white mb-2 mt-2 ">
        <!--          new document-->
        <svg class="mt-2 w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path clip-rule="evenodd" fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z"></path>
        </svg>
        <!--        pagenation bar-->
        <div class="mt-2 flex items-center justify-center col-span-2 ">
            <div class="flex items-center justify-between  text-gray-600 dark:text-gray-400 bg-gray-100 rounded-lg dark:bg-gray-600 max-w-[128px] mx-2">
                <button type="button" class="inline-flex items-center justify-center h-8 px-1 bg-gray-100 rounded-l-lg dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path clip-rule="evenodd" fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"></path>
                    </svg>
                    <span class="sr-only">Previous page</span>
                </button>
                <span class="flex-shrink-0 mx-1 text-sm font-medium">1 of 345</span>
                <button type="button" class="inline-flex items-center justify-center h-8 px-1 bg-gray-100 rounded-r-lg dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path clip-rule="evenodd" fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"></path>
                    </svg>
                    <span class="sr-only">Next page</span>
                </button>
            </div>
        </div>
        <!--          setting -->
        <svg class="mt-2 w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">-->
            <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
        </svg>
    </div>
</div>

<style>
    .fullSize {
        transform: translateX(-210px);
        z-index: 1;
        background-color: white;
    }
</style>