import type { ReactElement } from 'react'
import { CarouselProvider } from './components/CarouselProvider'
import { Profile } from './components/Profile'
import { Progress } from './components/Progress'
import { Resume } from './components/Resume'
import { Socials } from './components/Socials'
import { ThemeProvider } from './components/ThemeProvider'

export function App(): ReactElement {
  return (
    <ThemeProvider defaultTheme='dark'>
      <CarouselProvider>
        <div className='flex min-h-screen items-center justify-center'>
          <section className='flex h-96 justify-center gap-x-4'>
            <Profile />
            <div className='h-full w-56 space-y-4'>
              <Resume />
              <Progress />
            </div>
            <Socials />
          </section>
        </div>
      </CarouselProvider>
    </ThemeProvider>
  )
}
