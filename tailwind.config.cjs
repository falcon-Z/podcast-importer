const daisyui = require('daisyui');
const typography = require('@tailwindcss/typography');

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',

	theme: {
		extend: {
			colors: {
				primary: '#1DB954'
			},
			backgroundImage: {
				'spotify-wall': 'url("/bg-spotify.jpg")'
			}
		}
	},

	plugins: [typography, daisyui],

	daisyui: {
		themes: ['black']
	}
};

module.exports = config;
