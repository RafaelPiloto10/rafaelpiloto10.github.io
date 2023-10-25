<script lang="ts">
	import ExperienceCard from '$lib/components/ExperienceCard.svelte';
	import { onMount } from 'svelte';
	import { tagFilters } from '../../stores';

	let experiences = [
		{
			position: 'Lead Software Developer',
			company: 'Reffy Inc',
			img: 'icons/reffy.png',
			date: 'Apr 2022 - Present',
			description: `Designed and implemented scalable, distributed infrastructure to handle traffic supporting all application and business operations, including the client-facing web application and microservice backends for various functionalities reducing customer labor by 80%. Provided oversight and collaborated with 3 FTE to implement infrastructure and features within product requirement deadlines`,
			tags: ['Golang', 'React', 'Svelte', 'GCP', 'Docker']
		},
		{
			position: 'Technology Specialist Lead',
			company: 'Emory University TechLab',
			img: 'icons/techlab.png',
			date: 'Aug 2021 - Present',
			description: `Technology Specialist Lead at Emory's MAKEmory TechLab. Working to monitor the space and equipment such as 3D printers, tools, and electronic hardware. Responsible for resolving tier 1 issues with equipment and tools. Creating and Conducting Workshops for the Emory Community to further the growth of the maker space and STEM. Applying expertise in software development and electronics when assisting faculty and students.`,
			tags: ['3D Printing', 'Laser Cutting', '3D Modeling', 'Embedded Systems']
		},
		{
			position: 'Software Engineering Intern',
			company: 'Google',
			img: 'icons/google.png',
			date: 'Apr 2023 - Aug 2023',
			description: `Worked with Cloud Security Data Residency's Monitoring & Compliance Team to design, architect, and implement a pipeline process to automatically turn up internal service team monitoring jobs for data residency compliance using C++ and internal frameworks to save ~10 SWE days per quarter of on-call work, ~5 calendar day time reduction on rollout to internal service teams, and overall major improvement to system stability reducing error surface of ~2 manual configuration errors per quarter to zero.`,
			tags: ['C++', 'Bazel', 'Abseil', 'Flume', 'Distributed Systems']
		},
		{
			position: 'Student Researcher',
			company: 'Air Force Research Lab',
			img: 'icons/afrl.png',
			date: 'Feb 2023 - May 2023',
			description:
				'Integrated automated hyperparameter model tuning for Deep-Q Networks using sweeps and data analysis',
			tags: ['Python', 'Wandb', 'GCP']
		},
		{
			position: 'STEP Intern',
			company: 'Google',
			img: 'icons/google.png',
			date: 'May 2022 - Aug 2022',
			description:
				'Updated existing Vertex AI Debug Console and migrated a legacy console to centralize debugging resources using distributed databases (Spanner) to point to, cache, and display internal resource views optimizing engineer response and debugging time. Optimized & centralized debug journey experiences eliminating cognitive burden, improving reliability & accessibility by 80%',
			tags: ['Golang', 'TypeScript', 'GKE', 'Spanner', 'Angular']
		},
		{
			position: 'Student Researcher',
			company: 'Air Force Research lab',
			img: 'icons/afrl.png',
			date: 'Aug 2021 - May 2022',
			description:
				'Develop Human-Computer Multi-Modal Controllers using computer vision and natural language processing. Implemented gesture recognition for automatic video cropping and smoothing increasing model accuracy and validation by 15%',
			tags: ['Python', 'MediaPipe', 'OpenCV', 'Computer Vision', 'Gesture Recognition']
		},
		{
			position: 'STEP Intern',
			company: 'Google',
			img: 'icons/google.png',
			date: 'May 2021 - Aug 2021',
			description:
				'Implemented library framework to allow for test machine reservation and VM bin packing for Noisy Neighbor Tests. Library Framework streamlined the necessary steps for integration tests by bridging Google Machine Reservation Infrastructure to automate machine reservation & VM bin packing reducing the number of steps & time needed to write tests by 70%',
			tags: ['Golang', 'gRPC', 'Mocking']
		},
		{
			position: 'Student Researcher',
			company: 'Air Force Research Lab',
			img: 'icons/afrl.png',
			date: 'Jan 2021 - Aug 2021',
			description: `Refined reinforcement learning models for a robotic manufacturing process to optimize the propeller blade inspection process at Warner Robins Air Force Base. Abstracted model to reduce model configuration by over 80% with no required user-facing software`,
			tags: ['Python', 'Reinforcement Learning', 'Deep Learning', 'GCP']
		}
	];

	let mounted = false;
	onMount(() => {
		mounted = true;
	});
</script>

{#if mounted}
	<div class="flex min-h-screen w-full snap-start flex-row items-center justify-center gap-16">
		<div class="flex flex-col justify-center gap-2 pt-16">
			<h1 class="text-center text-6xl font-bold text-white">Experience</h1>
			<div
				class="mb-32 flex flex-col gap-8 px-2 py-16 sm:bg-gradient-to-b sm:from-white sm:to-white sm:bg-[length:2px_100%] sm:bg-center sm:bg-no-repeat"
			>
				{#each experiences as experience}
					{#if $tagFilters.length === 0 || experience.tags.filter((t) => $tagFilters.indexOf(t) >= 0).length > 0}
						<ExperienceCard
							position={experience.position}
							company={experience.company}
							img={experience.img}
							date={experience.date}
							description={experience.description}
							tags={experience.tags}
						/>
					{/if}
				{/each}
			</div>
		</div>
	</div>
{/if}
