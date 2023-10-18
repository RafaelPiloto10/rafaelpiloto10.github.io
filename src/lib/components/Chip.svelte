<script lang="ts">
	export let text: string;
	export let active: boolean = false;
	export let click: () => void = () => {};
</script>

{#if active}
	<button
		on:click={() => click()}
		class="w-fit rounded-full border border-[#1e1e1e] bg-white px-2 py-1 text-black hover:cursor-pointer"
	>
		<p class="text-sm">{text}</p>
	</button>
{:else}
	<button
		on:click={() => click()}
		class="w-fit rounded-full border border-[#1e1e1e] px-2 py-1 text-white hover:cursor-pointer hover:bg-white hover:text-black"
	>
		<p class="text-sm">{text}</p>
	</button>
{/if}
