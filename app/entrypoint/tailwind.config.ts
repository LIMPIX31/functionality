import      pnpapi     from 'pnpapi'
import type { Config } from 'tailwindcss'

import      nextui     from './nextui.ts'

const nextuiDist = pnpapi.resolveToUnqualified('@nextui-org/theme', process.cwd())

export default {
	content: ['../../**/*.{ts,tsx,mdx}', `${nextuiDist}dist/**/*.{js,ts,jsx,tsx}`],
	theme: {
		extend: {},
		fontFamily: {
			sans: ['var(--font-mabry)'],
		},
	},
	darkMode: 'class',
	plugins: [nextui],
} satisfies Config
