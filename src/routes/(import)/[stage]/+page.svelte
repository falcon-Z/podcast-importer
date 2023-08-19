<script lang="ts">
	import { page } from '$app/stores';
	import SearchingStage from './components/stages/searchingStage.svelte';
	import SubscribeStage from './components/stages/subscribeStage.svelte';
	import UploadStage from './components/stages/uploadStage.svelte';
</script>

{#if $page.params.stage == '1'}
	<UploadStage />
{:else if $page.params.stage == '2'}
	<SearchingStage />
{:else if $page.params.stage == '3'}
	<SubscribeStage />
{/if}
