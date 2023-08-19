import { error } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';

export const load = (async ({ params }) => {
	let steps = [
		{ step: 'upload', name: 'Upload Library' },
		{ step: 'search', name: 'Searching for Podcasts' },
		{ step: 'subscribe', name: 'Subscribing' }
	];

	const step = steps.find((s) => s.step === params.stage);

	if (!step) {
		throw error(404, 'Not found');
	}

	return { steps };
}) satisfies LayoutLoad;
