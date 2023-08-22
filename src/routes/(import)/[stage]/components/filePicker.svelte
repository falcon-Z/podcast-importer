<script>
	import { parseLibrary } from '$lib';
	import { libraryData } from '$lib/store';
	import Dropzone from 'svelte-file-dropzone/Dropzone.svelte';
	import { slide } from 'svelte/transition';

	$: fileErrors = null;
	$: acceptedFile = null;

	const handleFile = async (e) => {
		const { acceptedFiles } = e.detail;

		if (acceptedFiles.length > 0) {
			fileErrors = null;
			acceptedFile = acceptedFiles[0].name;

			const fileText = await acceptedFiles[0].text();

			const data = await parseLibrary(fileText);

			const outlines = data.opml.body.outlines;

			const podcasts = data.opml.body.outline.map((o) => ({ title: o._text, url: o._htmlUrl }));

			libraryData.set(podcasts);
		}
	};
	const handleRejetion = (e) => {
		const { fileRejections } = e.detail;

		fileErrors = fileRejections[0].errors;
	};
</script>

<Dropzone
	disableDefaultStyles
	containerClasses={'w-full rounded-2xl border-dashed  border-2 border-gray-700/50 p-8'}
	required
	multiple={false}
	accept={['.opml']}
	on:dropaccepted={handleFile}
	on:droprejected={handleRejetion}
/>

{#if acceptedFile}
	<dov class="alert rounded-xl my-4" transition:slide={{ delay: 200 }}>
		{acceptedFile}
	</dov>
{/if}

{#if fileErrors}
	<ul
		class="flex flex-col rounded-xl gap-4 justify-start my-4 alert alert-error"
		transition:slide={{ delay: 200 }}
	>
		{#each fileErrors as error}
			<li>{error.message}</li>
		{/each}
	</ul>
{/if}
