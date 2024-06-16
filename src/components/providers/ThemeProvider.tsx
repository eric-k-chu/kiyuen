'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { PropsWithChildren, ReactElement } from 'react'

export function ThemeProvider({ children }: PropsWithChildren): ReactElement {
  return (
    <NextThemesProvider attribute='class' defaultTheme='light'>
      {children}
    </NextThemesProvider>
  )
}
