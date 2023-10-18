<script lang="ts">
	import { scale } from 'svelte/transition';
	import Chip from './Chip.svelte';
	import { tagFilters } from '../../stores';

	export let name: string;
	export let img: string = '';
	export let description: string;
	export let github: string;
	export let tags: string[];
</script>

<div
	transition:scale
	class="flex w-full flex-col rounded-lg border border-[#1e1e1e] p-4 sm:min-w-[450px] sm:max-w-[450px]"
>
	{#if img !== ''}
		<div class="flex w-full flex-row items-center justify-center">
			<img class="object-fit mb-4 max-h-[230px] rounded" src={img} alt="project" />
		</div>
	{/if}

	<div class="flex w-full flex-row items-center justify-between border-b border-[#1e1e1e]">
		<h1 class="text-md font-bold">{name}</h1>
		<a href={github} referrerpolicy="no-referrer" target="_blank">
			<i class="fa-brands fa-github fa-lg text-white" />
		</a>
	</div>
	<div class="w-full min-w-full flex-grow pt-2">
		<p class="text-sm">{description}</p>
	</div>
	<div class="flex w-full flex-row flex-wrap gap-2 pt-4">
		{#each tags as tag}
			<Chip
				active={$tagFilters.indexOf(tag) >= 0}
				click={() => {
					if ($tagFilters.indexOf(tag) < 0) {
						$tagFilters.push(tag);
						$tagFilters = $tagFilters;
					} else {
						$tagFilters.splice($tagFilters.indexOf(tag), 1);
						$tagFilters = $tagFilters;
					}
				}}
				text={tag}
			/>
		{/each}
	</div>
</div>
