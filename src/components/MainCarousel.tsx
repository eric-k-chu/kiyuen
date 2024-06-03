'use client'

import { About } from './About'
import { Experience } from './Experience'
import { NavBar } from './NavBar'
import { NavIndicators } from './NavIndicators'
import { Projects } from './Projects'
import { Carousel, CarouselContent, CarouselItem } from './ui'

export function MainCarousel(): React.ReactElement {
  return (
    <Carousel>
      <NavBar />
      <CarouselContent className='flex h-screen w-screen items-center'>
        <CarouselItem className='w-full'>
          <About />
        </CarouselItem>
        <CarouselItem className='w-full'>
          <Experience />
        </CarouselItem>
        <CarouselItem className='w-full'>
          <Projects />
        </CarouselItem>
      </CarouselContent>
      <NavIndicators />
    </Carousel>
  )
}
