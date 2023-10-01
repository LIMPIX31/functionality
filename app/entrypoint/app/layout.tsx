import { PropsWithChildren } from 'react'

import                            './tailwind-directives.css'

import { fontsVariable }     from '@theme/fonts'

import { Providers }         from './providers.tsx'

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang='en' className={`dark ${fontsVariable}`}>
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
