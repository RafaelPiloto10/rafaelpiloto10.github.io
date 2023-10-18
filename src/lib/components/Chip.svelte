<script lang="ts">
	export let text: string;
	export let active: boolean = false;
	export let click: () => void = () => {};
</script>

<div
	class="w-fit rounded-full bg-gradient-to-br from-rose-400 via-fuchsia-500 to-indigo-500 p-[1px]"
>
	{#if active}
		<button
			on:click={() => click()}
			class="w-fit rounded-full bg-white px-2 py-1 text-black hover:cursor-pointer"
		>
			<p class="text-sm">{text}</p>
		</button>
	{:else}
		<button
			on:click={() => click()}
			class="w-fit rounded-full bg-black px-2 py-1 text-white hover:cursor-pointer hover:bg-white hover:text-black"
		>
			<p class="text-sm">{text}</p>
		</button>
	{/if}
</div>
