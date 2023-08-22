<script>
	import { libraryData } from '$lib/store';
	import FilePicker from '../filePicker.svelte';

	$: SubscribtionCount = 0;

	$: if ($libraryData) {
		SubscribtionCount = $libraryData.length;
	}
</script>

<div class=" text-center">
	<h1 class="text-4xl font-semibold tracking-wide">
		<span class="text-primary">Step 1: </span>
		Upload your Podcast Library
	</h1>
	<p class="mt-4 text-xl">
		Simply choose the <em>podcasts.opml</em> file you exported from your podcast provider
	</p>
</div>

<div>
	<FilePicker />
</div>

{#if SubscribtionCount > 0}
	<div>
		<h1 class="text-3xl">{SubscribtionCount}</h1>
	</div>
{/if}
