<script lang="ts">
	import { tagFilters } from '../../stores';
	import ProjectsCard from '$lib/components/ProjectsCard.svelte';
	import { onMount } from 'svelte';

	let projects = [
		{
			name: 'Guard AI',
			github: 'https://github.com/guard-ai',
			img: 'projects/guard-ai.png',
			description: `Building cutting-edge technology that keeps you and your loved ones safe. Guard AI scans local first responder radio frequency and immediately notifies you of any public threats using end-to-end automation and AI.`,
			tags: ['Expo', 'React Native', 'Golang', 'Python', 'Supabase']
		},
		{
			name: 'Today!',
			github: 'https://github.com/RafaelPiloto10/today',
			img: 'projects/today.png',
			description: `A blazingly simple, MacOS native menu app that tracks your todo items. No fluff, no analytics, no cloud accounts -- nada. Built in native SwiftUI for blazingly fast, native performance.`,
			tags: ['Swift', 'Swift UI Kit']
		},
		{
			name: 'Treblle Go Fiber',
			github: 'https://github.com/RafaelPiloto10/treblle-go-fiber',
			img: 'projects/treblle-go-fiber.png',
			description: `Open Source port of Treblle SDK for Golang for projects using the Fiber framework. Fiber is an HTTP framework and Treblle is an HTTP logging cloud service with a lot of cool features!`,
			tags: ['Open Source', 'Golang', 'Treblle', 'Fiber']
		},
		{
			name: 'EduSearch',
			github: 'https://github.com/RafaelPiloto10/edusearch',
			img: 'projects/edusearch.png',
			description: `A browser for education sites built by... students with ♥. This is a project for a data mining course in which we webscrapped various .edu websites and their corresponding newsletter sites. The browser in theory should rank the original source higher than their newsletter sites as they're more likely to link to the main university page.`,
			tags: ['React', 'Python', 'Page Ranking', 'Web Crawling']
		},
		{
			name: 'A.P.O.L.L.O',
			github: 'https://github.com/RafaelPiloto10/A.P.O.L.L.O',
			img: 'projects/apollo.png',
			description:
				'A Personal Assistant hosted on the browser that can complete various tasks upon request using your voice! Built to learn more about personal assistants, complexity, and accessibility.',

			tags: ['JavaScript', 'Python', 'Node.js', 'Tensorflow']
		},
		{
			name: 'Orpheus',
			github: 'https://github.com/RafaelPiloto10/orpheus',
			img: 'projects/orpheus.png',
			description: `In today's world, music is a universal language that transcends borders and connects people from all walks of life. However, the messages conveyed through music often reflect societal norms and values that shape our culture. In this project, we propose to use a Kaggle dataset of a million songs and potentially leverage the Spotify API to retrieve song metadata to analyze how songs conform to societal standards and issues such as gender and sociopolitical factors.`,
			tags: ['Python', 'D3.js', 'HTML']
		},
		{
			name: 'Themis',
			github: 'https://github.com',
			img: 'projects/themis.jpg',
			description:
				'Designed, wired, and built electronics using RFID Reader installation for Emory University Art Gallery Project - Software for the Social Justice Seesaw Art Gallery Design. Gold blocks with RFID tags needed to be detected when put on a seesaw and rendered on a monitor.',
			tags: ['Python', 'Embedded Systems', 'React', 'Networking']
		},
		{
			name: 'Habanero',
			github: 'https://github.com/RafaelPiloto10/Habanero/',
			img: 'projects/habanero.png',
			description:
				'A procedurally generated environment where Quokka-looking agents named Colokai (prey) will try to survive in a world of llama-looking Astabbas (predators). The Astabbas, led by their leader, Esteban Julio Ricardo Montoya de la Rosa Ramírez, will dominate the population of Colokai in the ever changing world of Habanero.',

			tags: ['C#', 'Unity', '3Ds Max', 'Procedural Generation']
		},
		{
			name: 'And More!',
			github: 'https://github.com/RafaelPiloto10/',
			img: 'projects/github.png',
			description: 'Find more of my projects and things I am actively working on, on GitHub!',
			tags: []
		}
	];
	let mounted = false;
	onMount(() => {
		mounted = true;
	});
</script>

{#if mounted}
	<div class="flex min-h-screen w-full snap-start flex-row items-center justify-center gap-16">
		<div class="flex w-full flex-col items-center justify-center gap-2 overflow-hidden pt-16">
			<h1 class="text-center text-6xl font-bold text-white">Projects</h1>
			<div class="flex flex-row overflow-scroll p-2 pb-8 pt-16 sm:w-5/6">
				<div class="flex w-full flex-col gap-8 sm:flex-row">
					{#each projects as project}
						{#if $tagFilters.length === 0 || project.tags.filter((t) => $tagFilters.indexOf(t) >= 0).length > 0}
							<ProjectsCard
								name={project.name}
								img={project.img}
								github={project.github}
								description={project.description}
								tags={project.tags}
							/>
						{/if}
					{/each}
				</div>
			</div>
		</div>
	</div>
{/if}

