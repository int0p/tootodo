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
const style_tapItem = "text-sm text-gray-500 dark:text-gray-400 h-[80px] max-h-[80px] overflow-y-auto";
</script>

<div class="ml-4 mr-4 flex-col w-[900px] h-full">
    <!--    project list-->
    <Tabs class="w-full">
        <Button pill  size="xs">+</Button>
        {#each Array(5) as _, index}
            <TabItem open title="Proj{index}">
                <p class={style_tapItem}><b>Goal:</b>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </TabItem>
        {/each}
    </Tabs>

    <!--    step -->
    <div class="my-4 w-full">
        <StepIndicator {currentStep} {steps} hideLabel/>
    </div>

<!--    project info -->
    <ProjectDetail class="w-full"/>
</div>