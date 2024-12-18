import type { PropsWithChildren, ReactElement } from 'react'
import { DirProvider, type DirProviderProps } from './DirProvider'
import { ThemeProvider, type ThemeProviderProps } from './ThemeProvider'

type Props = PropsWithChildren &
  Pick<DirProviderProps, 'defaultDir'> &
  Pick<ThemeProviderProps, 'defaultTheme'>

export function AppShell({ children, defaultDir, defaultTheme }: Props): ReactElement {
  return (
    <DirProvider defaultDir={defaultDir}>
      <ThemeProvider defaultTheme={defaultTheme}>{children}</ThemeProvider>
    </DirProvider>
  )
}
