<script lang="ts">
	import { page } from '$app/stores';

	const currentStage = $page.params.stage;

	const steps = [
		{ step: 1, name: 'Upload Library' },
		{ step: 2, name: 'Searching for Podcasts' },
		{ step: 3, name: 'Subscribing' }
	];
</script>

<div class="flex flex-col justify-start items-center h-full py-16 gap-16">
	<ul class="steps w-full">
		{#each steps as step}
			<li class={currentStage != step.step.toString() ? 'step ' : 'step step-primary'}>
				{step.name}
			</li>
		{/each}
	</ul>

	<div>
		<slot />
	</div>
</div>
