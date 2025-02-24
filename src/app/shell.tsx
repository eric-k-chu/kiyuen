import { ThemeProvider } from 'next-themes'
import type { PropsWithChildren, ReactElement } from 'react'

export function Shell({ children }: PropsWithChildren): ReactElement {
  return (
    <ThemeProvider defaultTheme='dark' attribute='class' enableSystem disableTransitionOnChange>
      {children}
    </ThemeProvider>
  )
}
