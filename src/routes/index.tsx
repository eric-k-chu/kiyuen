import { CarouselProvider, Controls, Profile, Resume } from '@/route/home/components'
import { createFileRoute } from '@tanstack/react-router'
import type { ReactElement } from 'react'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home(): ReactElement {
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
