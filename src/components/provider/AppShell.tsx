import type { PropsWithChildren, ReactElement } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { DirProvider, type DirProviderProps } from './DirProvider'
import { ThemeProvider, type ThemeProviderProps } from './ThemeProvider'

type Props = PropsWithChildren &
  Pick<DirProviderProps, 'defaultDir'> &
  Pick<ThemeProviderProps, 'defaultTheme'>

export function AppShell({ children, defaultDir, defaultTheme }: Props): ReactElement {
  return (
    <HelmetProvider>
      <DirProvider defaultDir={defaultDir}>
        <ThemeProvider defaultTheme={defaultTheme}>{children}</ThemeProvider>
      </DirProvider>
    </HelmetProvider>
  )
}
