import { Controls, Profile, Resume } from '@/components'
import { CarouselProvider } from '@/components/provider/carousel'
import type { ReactElement } from 'react'

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
