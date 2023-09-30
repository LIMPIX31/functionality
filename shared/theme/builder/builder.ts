import type { ColorScale } from '@nextui-org/theme'

import      { biShade }    from './shade-color.ts'
import      { liShade }    from './shade-color.ts'

export class ShadeBuilder {
	constructor(
		private readonly background: string,
		private readonly foreground: string,
	) {
		this.bi = this.bi.bind(this)
		this.li = this.li.bind(this)
	}

	li(revert = false): Required<ColorScale> {
		return liShade(this.background, this.foreground, revert)
	}

	bi(color: string): Required<ColorScale> {
		return biShade(color, this.background, this.foreground)
	}
}
