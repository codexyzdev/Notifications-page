/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			Red: 'hsl(1, 90%, 64%)',
			Blue: 'hsl(219, 85%, 26%)',
			White: 'hsl(0, 0%, 100%)',
			VeryLightGrayishBlue: 'hsl(210, 60%, 98%)',
			LightGrayishBlueOne: 'hsl(211, 68%, 94%)',
			LightGrayishBluetwo: 'hsl(205, 33%, 90%)',
			GrayishBlue: 'hsl(219, 14%, 63%)',
			DarkBrayishBlue: 'hsl(219, 12%, 42%)',
			VeryDarkBlue: 'hsl(224, 21%, 14%)'
		}
	},
	plugins: []
}
