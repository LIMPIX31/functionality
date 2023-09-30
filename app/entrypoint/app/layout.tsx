import { PropsWithChildren } from 'react'

import                            './tailwind-directives.css'

import { Providers }         from './providers.tsx'

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang='en' className='dark'>
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
