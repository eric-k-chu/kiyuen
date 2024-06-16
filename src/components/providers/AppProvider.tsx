'use client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { PropsWithChildren, ReactElement, useEffect } from 'react'
import { ThemeProvider } from './ThemeProvider'

export function AppProvider({ children }: PropsWithChildren): ReactElement {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 500,
      delay: 0,
      easing: 'ease-out-sine',
    })
  }, [])

  return <ThemeProvider>{children}</ThemeProvider>
}
