import type { ReactElement } from 'react'
import { CarouselProvider } from './components/CarouselProvider'
import { Controls } from './components/Controls'
import { DirProvider } from './components/DirProvider'
import { Profile } from './components/Profile'
import { Resume } from './components/Resume'
import { ResumeProgress } from './components/ResumeProgress'
import { ThemeProvider } from './components/ThemeProvider'

export function App(): ReactElement {
  return (
    <DirProvider defaultDir='ltr'>
      <ThemeProvider defaultTheme='dark'>
        <CarouselProvider>
          <div className='flex min-h-screen items-center justify-center'>
            <section className='flex h-96 justify-center gap-x-3'>
              <Profile />
              <div className='h-full w-56 space-y-4'>
                <Resume />
                <ResumeProgress />
              </div>
              <Controls />
            </section>
          </div>
        </CarouselProvider>
      </ThemeProvider>
    </DirProvider>
  )
}
