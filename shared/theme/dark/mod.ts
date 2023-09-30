import type { ConfigTheme }  from '@nextui-org/theme'

import      { ShadeBuilder } from '@theme/builder'
import      { dark }         from '@theme/common'
import      { light }        from '@theme/common'
import      { primary }      from '@theme/common'

const { bi, li } = new ShadeBuilder(dark, light)

export const darkTheme: ConfigTheme = {
	extend: 'dark',
	colors: {
		primary: bi(primary),
		background: li(),
		foreground: li(true),
	},
}
