import * as families from './families/mod.ts'

export const fontsVariable = Object.values(families)
	.map((fam) => fam.variable)
	.join(' ')
