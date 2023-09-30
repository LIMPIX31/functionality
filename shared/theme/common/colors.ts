import { deriveDarkFromAccent }  from '@theme/builder'
import { deriveLightFromAccent } from '@theme/builder'

export const primary = '#ff5349'
export const dark = deriveDarkFromAccent(primary)
export const light = deriveLightFromAccent(primary)
