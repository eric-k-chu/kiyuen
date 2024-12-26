import { CarouselProvider, Menubar, Profile } from '@/components'
import { createFileRoute } from '@tanstack/react-router'
import type { ReactElement } from 'react'
import { Helmet } from 'react-helmet-async'
import { Resume } from './-resume'

export const Route = createFileRoute('/(home)/')({
  component: Home,
})

function Home(): ReactElement {
  return (
    <CarouselProvider>
      <Helmet>
        <title>kiyuen</title>
        <meta name='description' content="Eric Chu's personal portfolio site" />
      </Helmet>
      <section className='flex h-[26rem] justify-center gap-x-3'>
        <Profile />
        <Resume />
        <Menubar />
      </section>
    </CarouselProvider>
  )
}
