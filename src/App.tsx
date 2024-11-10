import type { ReactElement } from 'react'
import { ThemeProvider } from './components/ThemeProvider'

export function App(): ReactElement {
  return (
    <ThemeProvider defaultTheme='dark'>
      <div className='flex min-h-screen items-center justify-center'>
        <div className='flex flex-col items-center'>
          <div className='size-6 rounded-full bg-red-400' />
          <p aria-hidden>E</p>
          <p aria-hidden>R</p>
          <p aria-hidden>I</p>
          <p aria-hidden>C</p>
          <p aria-hidden className='mt-4'>
            C
          </p>
          <p aria-hidden>H</p>
          <p aria-hidden>U</p>
          <span className='sr-only'>Eric Chu</span>
        </div>
      </div>
    </ThemeProvider>
  )
}
