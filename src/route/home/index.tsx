import type { ReactElement } from 'react'
import { CarouselProvider, Controls, Profile, Resume } from './components'

export function Home(): ReactElement {
  return (
    <CarouselProvider>
      <div className='flex min-h-screen items-center justify-center'>
        <section className='flex h-96 justify-center gap-x-3'>
          <Profile />
          <Resume />
          <Controls />
        </section>
      </div>
    </CarouselProvider>
  )
}
