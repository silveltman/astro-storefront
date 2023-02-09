/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ["'Inter'", 'sans serif'],
			// secondary: ["'FromTheStars'", 'display', 'sans serif'],
		},
		extend: {
			colors: {
				primary: {
					DEFAULT: '#172bde',
					50: "#f4f5fe",
					100: "#c8cdf9",
					200: "#a3abf5",
					300: "#7e89f2",
					400: "#5968ee",
					500: "#3446ea",
					600: "#172bde",
					700: "#1221ab",
					800: "#0c1778",
					900: "#070d45"
				},
				secondary: {
					DEFAULT: '#ff5a03',
					50: "#ffede3",
					100: "#ffe0cf",
					200: "#ffc5a6",
					300: "#ffaa7d",
					400: "#ff8f55",
					500: "#ff752c",
					600: "#ff5a03",
					700: "#c54400",
					800: "#882f00",
					900: "#4a1a00"
				},
				neutral: {
					DEFAULT: '#71727a',
					50: '#fafafa',
					100: '#f4f4f5',
					200: '#e4e4e7',
					300: '#d4d4d8',
					400: '#a1a2aa',
					500: '#71727a',
					600: '#52535b',
					700: '#3f4046',
					800: '#27272a',
					900: '#18181b'
				},
			},
			spacing: {
				DEFAULT: '1rem',
				'xs': '0.25rem',
				'sm': '0.5rem',
				'base': '1rem',
				'lg': '2rem',
				'xl': '4rem',
				'2xl': '6rem',
			},
			screens: {
				'3xl': '1792px',
			},
		},
	},
	corePlugins: {
		aspectRatio: false,
	},
	plugins: [
		require('tailwind-scrollbar'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/forms'),
	],
}
