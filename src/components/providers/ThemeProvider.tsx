'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { PropsWithChildren } from 'react'

export function ThemeProvider({ children }: PropsWithChildren): React.ReactElement {
  return <NextThemesProvider attribute='class'>{children}</NextThemesProvider>
}
