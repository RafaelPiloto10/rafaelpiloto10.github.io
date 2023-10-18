<script lang="ts">
	import About from '$lib/sections/About.svelte';
	import Experience from '$lib/sections/Experience.svelte';
	import Projects from '$lib/sections/Projects.svelte';
</script>

<div class="flex w-full flex-row items-center justify-center">
	<div class="flex w-full max-w-screen-2xl flex-col items-center justify-center">
		<About>
			<Experience />
			<Projects />
			<footer class="w-full snap-start p-2">
				<div class="flex w-full flex-row items-center justify-center gap-2 text-gray-400">
					<i class="fa-regular fa-copyright" />
					<p class="text-sm">2023 Rafael Piloto</p>
				</div>
			</footer>
		</About>
	</div>
</div>
