<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, ImagePlaceholder, Skeleton, TextPlaceholder } from 'flowbite-svelte'
</script>

<div class="relative px-8">
    <Navbar
            navClass="px-2 sm:px-4 py-2.5 absolute w-full z-20 top-0 left-0 border-b"
            let:hidden
            let:toggle
    >
        <NavBrand href="/">
            <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/>
            <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
        </NavBrand>
        <NavHamburger on:click={toggle} />
        <NavUl {hidden}>
            <NavLi href="/" active={true}>Home</NavLi>
            <NavLi href="/about">About</NavLi>
            <NavLi href="/services">Services</NavLi>
            <NavLi href="/pricing">Pricing</NavLi>
            <NavLi href="/contact">Contact</NavLi>
        </NavUl>
    </Navbar>
</div>