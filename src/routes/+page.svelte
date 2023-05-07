<script>
    import Timer from "./timer/+page.svelte";
    import Daily from "./daily/+page.svelte";
    import Memo from "./memo/+page.svelte";
    import {Navbar, NavBrand, NavLi, NavUl, NavHamburger, Heading, ButtonGroup,Button} from 'flowbite-svelte'
    import Icon from '@iconify/svelte';
</script>

<div class="flex w-full">
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
                    <Button href="/" active={true}><Icon icon="radix-icons:lap-timer" width="24"/></Button>
                    <Button href="/workList"><Icon icon="material-symbols:folder-copy"  width="24"/></Button>
                    <Button href="/statistics"><Icon icon="uim:chart-pie" width="24" /></Button>
                    <NavLi href="/setting"><Icon icon="ant-design:setting-filled" width="32" /></NavLi>
                </NavUl>
            </ButtonGroup>

        </Navbar>
        <Timer class=""/>
        <Memo class=""/>
    </div>
    <Daily class="w-1/4"/>
</div>