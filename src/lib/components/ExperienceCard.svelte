<script lang="ts">
	import { scale } from 'svelte/transition';
	import Chip from './Chip.svelte';
	import { tagFilters } from '../../stores';

	export let position: string;
	export let company: string;
	export let img: string = '';
	export let date: string;
	export let description: string;
	export let tags: string[];
</script>

<div
	transition:scale
	class="max-w-sm rounded-lg border border-[#1e1e1e] bg-black p-4 sm:max-w-md sm:odd:ml-[15rem]"
>
	<div class="w-full border-b border-[#1e1e1e]">
		<h1 class="text-md font-bold">{position}</h1>
	</div>
	<div class="flex flex-row items-center justify-between pt-2">
		<div class="flex flex-row items-center gap-2">
			{#if img !== ''}
				<img class="w-4" src={img} alt="company logo" />
			{/if}
			<p class="text-sm">{company}</p>
		</div>
		<p class="text-sm">{date}</p>
	</div>
	<div class="pt-2">
		<p class="text-sm">{description}</p>
	</div>
	<div class="flex flex-row flex-wrap gap-2 pt-2">
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
