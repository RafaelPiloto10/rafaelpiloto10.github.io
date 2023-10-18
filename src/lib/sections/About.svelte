<script lang="ts">
	import { onMount } from 'svelte';
	import { scale } from 'svelte/transition';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

{#if mounted}
	<div class="flex h-screen w-full snap-center flex-col items-center p-8">
		<div
			transition:scale={{ delay: 100, duration: 750 }}
			class="flex h-full w-full flex-col items-center justify-center gap-16 sm:flex-row"
		>
			<img class="h-64 w-64 rounded-full" src="pfp.jpeg" alt="Profile" />
			<div class="flex flex-col items-end justify-center gap-2">
				<h1 class="text-center text-5xl font-bold sm:text-6xl">👋 Howdy.</h1>
				<h1 class="text-center text-5xl font-bold sm:text-6xl">I am Rafael.</h1>
				<div class="flex flex-row gap-4 text-white">
					<a href="mailto:rpilotojr10@gmail.com">
						<i class="fa-regular fa-envelope fa-xl" />
					</a>
					<a href="https://github.com/RafaelPiloto10">
						<i class="fa-brands fa-github fa-xl" />
					</a>
					<a href="https://www.linkedin.com/in/RafaelPiloto10">
						<i class="fa-brands fa-linkedin fa-xl" />
					</a>
					<a href="/resume.pdf" target="_blank" referrerpolicy="no-referrer">
						<i class="fa-regular fa-file-lines fa-xl" />
					</a>
				</div>
			</div>
		</div>
		<span class="animate-bounce"><i class="fa-solid fa-arrow-down fa-xl" /></span>
	</div>
{/if}
