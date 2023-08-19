import type { LayoutLoad } from './$types';

export const load = (async () => {
	let steps = [
		{ step: 1, name: 'Upload Library' },
		{ step: 2, name: 'Searching for Podcasts' },
		{ step: 3, name: 'Subscribing' }
	];

	return { steps };
}) satisfies LayoutLoad;
