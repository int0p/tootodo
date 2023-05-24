<script>
import checkboxMarkedOutline from "@iconify/icons-mdi/checkbox-marked-outline.js";
import {SidebarGroup, SidebarItem} from "flowbite-svelte";
import Icon from "@iconify/svelte";
</script>
<!--      done list-->

<SidebarGroup border>
    <SidebarItem label="Users">
        <svelte:fragment slot="icon">
            <Icon icon={checkboxMarkedOutline} width="22"/>
        </svelte:fragment>
    </SidebarItem>
    <SidebarItem label="Sign In">
        <svelte:fragment slot="icon">
            <Icon icon={checkboxMarkedOutline} width="22"/>
        </svelte:fragment>
    </SidebarItem>
    <SidebarItem label="Sign Up">
        <svelte:fragment slot="icon">
            <Icon icon={checkboxMarkedOutline} width="22"/>
        </svelte:fragment>
    </SidebarItem>
</SidebarGroup>