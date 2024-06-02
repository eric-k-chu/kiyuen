'use client'

import { PropsWithChildren } from 'react'
import { ThemeProvider } from './ThemeProvider'

export function AppProvider({ children }: PropsWithChildren): React.ReactElement {
  return <ThemeProvider>{children}</ThemeProvider>
}
