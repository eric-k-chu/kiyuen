'use client'

import { About } from './About'
import { Contact } from './Contact'
import { Experience } from './Experience'
import { NavBar } from './NavBar'
import { NavIndicators } from './NavIndicators'
import { Projects } from './Projects'
import { Carousel, CarouselContent, CarouselItem } from './ui'

export function MainCarousel(): React.ReactElement {
  return (
    <Carousel className='flex h-full flex-col items-center justify-between gap-y-4'>
      <NavBar />
      <CarouselContent className='flex w-full basis-10/12 items-center'>
        <CarouselItem className='w-full'>
          <About />
        </CarouselItem>
        <CarouselItem className='w-full'>
          <Experience />
        </CarouselItem>
        <CarouselItem className='w-full'>
          <Projects />
        </CarouselItem>
        <CarouselItem className='w-full'>
          <Contact />
        </CarouselItem>
      </CarouselContent>
      <NavIndicators />
    </Carousel>
  )
}
