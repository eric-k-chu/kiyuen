import { Menubar, Profile } from '@/components'
import { CarouselProvider } from '@/providers'
import type { ReactElement } from 'react'
import { ResumeCard } from './card'

export default function Home(): ReactElement {
  return (
    <CarouselProvider>
      <section className='flex h-[26rem] justify-center gap-x-3'>
        <Profile />
        <ResumeCard />
        <Menubar />
      </section>
    </CarouselProvider>
  )
}
