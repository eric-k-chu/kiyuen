import { CarouselProvider } from '@/components'
import { createFileRoute } from '@tanstack/react-router'
import type { ReactElement } from 'react'
import { Menubar } from './-menu-bar'
import { Profile } from './-profile'
import { Resume } from './-resume'

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
          <Menubar />
        </section>
      </div>
    </CarouselProvider>
  )
}
