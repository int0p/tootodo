<script>
import ProjectDetail from "./projectDetail.svelte";
import {Button,StepIndicator, TabItem, Tabs} from "flowbite-svelte";
let currentStep = 2;
let steps = [
    'Step 1',
    'Step 2',
    'Step 3',
    'Step 4',
    'Step 5'
];
let status = "blue"; //not started, ongoing, done, all
const style_tapItem = "text-sm text-gray-500 dark:text-gray-400 h-[60px] max-h-[60px] overflow-y-auto";
</script>

<div class="float-left top-0 left-0 w-5/12 ml-4 mr-2 flex-col h-full ">
    <!--    project list-->
    <Tabs class="w-full flex-nowrap overflow-x-hidden ">
        <Button pill  class="h-8 w-4 self-end mb-1" color={status}>+</Button>
        {#each Array(5) as _, index}
            <TabItem open title="Proj{index+1}" class="h-[44px]">
                <p class={style_tapItem}><b>Goal:</b>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </TabItem>
        {/each}
    </Tabs>

    <!--    step -->
    <div class="my-4 w-full ">
        <StepIndicator {currentStep} {steps} hideLabel/>
    </div>

<!--    project info -->
    <ProjectDetail />
</div>
