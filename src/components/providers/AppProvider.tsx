'use client'

import { PropsWithChildren, ReactNode } from 'react'
import { ThemeProvider } from './ThemeProvider'

export function AppProvider({ children }: PropsWithChildren): ReactNode {
  return <ThemeProvider>{children}</ThemeProvider>
}
