'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { PropsWithChildren, ReactNode } from 'react'

export function ThemeProvider({ children }: PropsWithChildren): ReactNode {
  return (
    <NextThemesProvider attribute='class' defaultTheme='dark'>
      {children}
    </NextThemesProvider>
  )
}
