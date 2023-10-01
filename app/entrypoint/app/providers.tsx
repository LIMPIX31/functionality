'use client'

import { PropsWithChildren }                   from 'react'

import { NextUIProvider }                      from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from "next-themes"

import Scroll                                  from './scroll.tsx'

export function Providers({ children }: PropsWithChildren) {
	return (
		<NextUIProvider>
			<NextThemesProvider attribute='class' defaultTheme='dark'>
				<Scroll>{children}</Scroll>
			</NextThemesProvider>
		</NextUIProvider>
	)
}
