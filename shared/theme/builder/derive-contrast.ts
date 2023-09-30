import { hsl }        from 'polished'
import { parseToHsl } from 'polished'
import { shade }      from 'polished'
import { tint }       from 'polished'

export function deriveDarkFromAccent(accent: string, value = 0.9, saturation = 0.05) {
	const parsed = parseToHsl(shade(value, accent))
	return hsl({
		...parsed,
		saturation,
	})
}

export function deriveLightFromAccent(accent: string, value = 0.95, saturation = 0.1) {
	const parsed = parseToHsl(tint(value, accent))
	return hsl({
		...parsed,
		saturation,
	})
}
