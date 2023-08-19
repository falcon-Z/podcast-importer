import { error } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';

export const load = (async ({ params }) => {
	let steps = [
		{ step: 1, name: 'Upload Library' },
		{ step: 2, name: 'Searching for Podcasts' },
		{ step: 3, name: 'Subscribing' }
	];

	const step = steps.find((s) => s.step === parseInt(params.stage));

	if (!step) {
		throw error(404, 'Not found');
	}

	return { steps };
}) satisfies LayoutLoad;
