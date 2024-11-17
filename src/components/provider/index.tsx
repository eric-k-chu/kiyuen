import type { PropsWithChildren, ReactElement } from 'react'
import { CarouselProvider } from './carousel'
import { DirProvider, type DirProviderProps } from './dir'
import { ThemeProvider, type ThemeProviderProps } from './theme'

type Props = PropsWithChildren &
  Pick<DirProviderProps, 'defaultDir'> &
  Pick<ThemeProviderProps, 'defaultTheme'>

export function AppShell({ children, defaultDir, defaultTheme }: Props): ReactElement {
  return (
    <DirProvider defaultDir={defaultDir}>
      <ThemeProvider defaultTheme={defaultTheme}>
        <CarouselProvider>{children}</CarouselProvider>
      </ThemeProvider>
    </DirProvider>
  )
}
