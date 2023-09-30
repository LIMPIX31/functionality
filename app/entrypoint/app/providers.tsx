'use client'

import { PropsWithChildren }                   from 'react'

import { NextUIProvider }                      from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function Providers({ children }: PropsWithChildren) {
	return (
		<NextUIProvider>
			<NextThemesProvider attribute='class' defaultTheme='dark'>
				{children}
			</NextThemesProvider>
		</NextUIProvider>
	)
}
