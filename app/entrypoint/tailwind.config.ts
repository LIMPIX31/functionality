import      { nextui } from '@nextui-org/react'
import      pnpapi     from 'pnpapi'
import type { Config } from 'tailwindcss'

const nextuiDist = pnpapi.resolveToUnqualified('@nextui-org/theme', process.cwd())

export default {
	content: ['../../**/*.{ts,tsx,mdx}', `${nextuiDist}dist/**/*.{js,ts,jsx,tsx}`],
	theme: {
		extend: {},
	},
	darkMode: 'class',
	plugins: [nextui()],
} satisfies Config
