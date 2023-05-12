<script>
    import Timer from "./clock/+page.svelte";
    import Memo from "./memo/+page.svelte";
    import {Navbar, NavBrand, NavLi, NavUl, NavHamburger, Heading, ButtonGroup,Button} from 'flowbite-svelte';
    import Icon from '@iconify/svelte';
    import { goto, beforeNavigate, afterNavigate } from '$app/navigation';
</script>

<div class="flex-col w-2/3"  >
    <!--        TODO: css grid배우고 navbar +layout으로 옮기기.-->
    <Navbar class="" let:hidden let:toggle>
        <NavBrand href="/" >
            <Heading tag="h1" class="self-center whitespace-nowrap text-xl font-bold dark:text-white"
                     customSize="text-4xl font-extrabold  lg:text-5xl">
                WinYeah
            </Heading>
        </NavBrand>
        <NavHamburger on:click={toggle} />
        <ButtonGroup >
            <NavUl {hidden}>
                <Button on:click={()=>goto('/daily')} active={true}><Icon icon="radix-icons:lap-timer" width="24"/></Button>
                <Button on:click={()=>goto('/work')}><Icon icon="material-symbols:folder-copy"  width="24"/></Button>
                <Button on:click={()=>goto('/statistics')}><Icon icon="uim:chart-pie" width="24" /></Button>
                <NavLi on:click={()=>goto('/setting')}><Icon icon="ant-design:setting-filled" width="32" /></NavLi>
            </NavUl>
        </ButtonGroup>

    </Navbar>
    <Timer class=""/>
    <Memo class=""/>
</div>