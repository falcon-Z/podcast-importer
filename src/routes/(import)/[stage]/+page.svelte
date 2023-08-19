<script lang="ts">
	import { page } from '$app/stores';
	import SearchingStage from './components/stages/searchingStage.svelte';
	import SubscribeStage from './components/stages/subscribeStage.svelte';
	import UploadStage from './components/stages/uploadStage.svelte';
</script>

<div class="flex flex-col justify-around items-center h-full gap-16">
	{#if $page.params.stage == 'upload'}
		<UploadStage />
	{:else if $page.params.stage == 'search'}
		<SearchingStage />
	{:else if $page.params.stage == 'subscribe'}
		<SubscribeStage />
	{/if}
</div>
