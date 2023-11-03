/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
	darkMode: 'class',
	content: ['./components/**/*.tsx', './pages/**/*.tsx'],
	theme: {
		extend: {
			fontFamily: {
				sometypeMono: ['Sometype Mono', 'monospace'],
			},
			colors: {
				'accent-1': '#FAFAFA',
				'accent-2': '#EAEAEA',
				'accent-7': '#333',
				success: '#0070f3',
				cyan: '#79FFE1',
				primary: colors.blue,
				'dark-bg': '#152937',
				'light-bg': '#F1F4F6',
			},
			spacing: {
				28: '7rem',
			},
			letterSpacing: {
				tighter: '-.04em',
			},
			lineHeight: {
				tight: 1.2,
			},
			fontSize: {
				'5xl': '2.5rem',
				'6xl': '2.75rem',
				'7xl': '4.5rem',
				'8xl': '6.25rem',
			},
			boxShadow: {
				sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
				md: '0 8px 30px rgba(0, 0, 0, 0.12)',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
