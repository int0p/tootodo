<script>
    import {
        Input,
        Label,
        Button,
        CloseButton,
        Popover,
        Heading,
        Badge,
        Indicator,
        List,
        Checkbox, Li, Hr
    } from "flowbite-svelte";
    import Icon from '@iconify/svelte';
    import searchIcon from '@iconify/icons-mdi/search';
    import listLineDuotone from '@iconify/icons-solar/list-line-duotone';

    let todayList =[
        {
            title: "test1",
        },
        {
            title: "test2",
        },
        {
            title: "test3",
        },
        {
            title: "test4",
        },

    ]

    let allList =[
        {
            title: "test1",
        },
        {
            title: "test2",
        },
        {
            title: "test3",
        },
        {
            title: "test4",
        },

    ]


</script>

<Label class="w-full h-[44px] ">
    <Input type="text" placeholder="select work" size="lg">
        <Icon icon={searchIcon} width="28" slot="left" />
        <Icon icon={listLineDuotone} id="listIcon" width="30" slot="right" hFlip={true} />
    </Input>
</Label>

<Popover
        placement="bottom"
        triggeredBy="#listIcon"
        class="w-[600px] h-[500px] text-sm font-light text-gray-500 bg-white dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
    <div class="flex-col p-3 ">
        <Heading tag="h3" class="mb-4">Work List</Heading>

        <div class="flex justify-around">
                <Button size="sm" class="relative w-[264px] " outline gradient color="cyanToBlue">
                    <span class="sr-only">Remain</span>
                    <div class="flex-col w-full">
                        <Heading tag="h5"
                                 customSize="text-lg font-semibold"
                                 class="text-lg font-semibold text-gray-900 dark:text-white px-20">Today</Heading>
                        <div class="border-2 w-full h-[360px]">
                            <List tag="ul" class="space-y-1">
                                {#each todayList as work}
                                    <Checkbox class="p-2 m-2 break-words">{work.title}</Checkbox>
                                {/each}
                            </List>
                        </div>
                    </div>
                    <Indicator color="red" border size="xl" placement="top-right">
                        <span class="text-white text-xs font-bold">8</span>
                    </Indicator>
                </Button>

            <Button size="sm" class="relative w-[264px] " outline gradient color="pinkToOrange">
                <span class="sr-only">Remain</span>
                <div class="flex-col w-full">
                    <Heading tag="h5"
                             customSize="text-lg font-semibold"
                             class="text-lg font-semibold text-gray-900 dark:text-white px-[94px]">All</Heading>
                    <div class="border-2 w-full h-[360px]">
                        <List tag="ul" class="space-y-1">
                            {#each allList as work}
                                <Checkbox class="p-2 m-2 break-words">{work.title}</Checkbox>
                            {/each}
                        </List>
                    </div>
                </div>
                <Indicator color="red" border size="xl" placement="top-right">
                    <span class="text-white text-xs font-bold">8</span>
                </Indicator>
            </Button>


        </div>
    </div>
</Popover>
