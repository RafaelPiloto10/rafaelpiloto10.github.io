<script lang="ts">
	import About from '$lib/sections/About.svelte';
	import Experience from '$lib/sections/Experience.svelte';
	import Projects from '$lib/sections/Projects.svelte';
	import { onMount } from 'svelte';

	let mounted = false;
	onMount(() => {
		mounted = true;
		window.scrollTo(0, 0);
	});
</script>

<div class="flex w-full flex-row items-center justify-center">
	<div class="flex w-full max-w-screen-2xl flex-col items-center justify-center">
		<About />
		{#if mounted}
			<Experience />
			<Projects />
		{/if}
	</div>
</div>
