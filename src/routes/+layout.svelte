<script>
	import '../app.scss';
	import '../app.postcss';
    import Timer from "./timer/+page.svelte";
    import Daily from "./daily/+page.svelte";
</script>

<!--use Timer as sidebar-->
<div class="flex w-full">
    <Timer class="w-2/3"/>
    <slot class="w-1/3"/>
</div>