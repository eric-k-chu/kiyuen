'use client'

import { PropsWithChildren, ReactElement } from 'react'
import { ThemeProvider } from './ThemeProvider'

export function AppProvider({ children }: PropsWithChildren): ReactElement {
  return <ThemeProvider>{children}</ThemeProvider>
}
