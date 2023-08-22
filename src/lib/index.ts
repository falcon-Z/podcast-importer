import { error } from '@sveltejs/kit';
import { XMLParser } from 'fast-xml-parser';

export const parseLibrary = (data: string) => {
	const parser = new XMLParser({
		allowBooleanAttributes: true,
		ignoreAttributes: false,
		attributeNamePrefix: '_'
	});

	try {
		const parsedData = parser.parse(data, true);

		return parsedData;
	} catch (err) {
		console.error(err);
		throw error(500, 'Something went wrong');
	}
};
