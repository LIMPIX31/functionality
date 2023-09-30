import type { ColorScale }   from '@nextui-org/theme'
import      { mix }          from 'polished'

import      { SCALE_VALUES } from './constants.ts'

const { fromEntries } = Object

export function biShade(color: string, background: string, foreground: string) {
	// prettier-ignore
	const mixed = SCALE_VALUES.map(
		(scale, _, __, mid = scale > 500) =>
			[
				scale,
				mix(
					(mid ? (scale - 500) * 2 : scale * 2) / 1000,
					mid ? foreground : color,
					mid ? color : background
				)
			] as const,
	)

	const scale: ColorScale = fromEntries(mixed)

	scale.DEFAULT = scale[500]
	scale.foreground = foreground

	return scale as Required<ColorScale>
}

export function liShade(background: string, foreground: string, revert?: boolean) {
	const [a, b] = revert ? ([background, foreground] as const) : ([foreground, background] as const)
	const mixed = SCALE_VALUES.map((scale) => [scale, mix(scale / 1000, a, b)] as const)
	const scale: ColorScale = fromEntries(mixed)

	scale.DEFAULT = b
	scale.foreground = foreground

	return scale as Required<ColorScale>
}
