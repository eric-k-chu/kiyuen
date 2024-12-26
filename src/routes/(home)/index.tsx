import { CarouselProvider, Menubar, Profile } from '@/components'
import { createFileRoute } from '@tanstack/react-router'
import type { ReactElement } from 'react'
import { Resume } from './-resume'

export const Route = createFileRoute('/(home)/')({
  component: Home,
})

function Home(): ReactElement {
  return (
    <CarouselProvider>
      <section className='flex h-[26rem] justify-center gap-x-3'>
        <Profile />
        <Resume />
        <Menubar />
      </section>
    </CarouselProvider>
  )
}
