<script lang="ts">
	import { page } from '$app/stores';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	const { steps } = data;

	const currentStage = $page.params.stage;
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
