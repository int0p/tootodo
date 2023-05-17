<script>
    import Timer from "./clock/+page.svelte";
    import Memo from "./memo/+page.svelte";
    import {Navbar, NavBrand, NavLi, NavUl, NavHamburger, Heading, ButtonGroup, Button, Toggle} from 'flowbite-svelte';

    import Icon from '@iconify/svelte';
    import lapTimer from '@iconify/icons-radix-icons/lap-timer';
    import folderCopy from '@iconify/icons-material-symbols/folder-copy';
    import chartPie from '@iconify/icons-uim/chart-pie';
    import settingFilled from '@iconify/icons-ant-design/setting-filled';

    import { goto, beforeNavigate, afterNavigate } from '$app/navigation';

</script>

<div class="flex-col ml-4">
    <Timer class=""/>
    <Memo class=""/>
</div>