'use client'

import { About } from './About'
import { NavBar } from './NavBar'
import { Carousel, CarouselContent, CarouselItem } from './ui'

export function MainCarousel(): React.ReactElement {
  return (
    <Carousel>
      <NavBar />
      <CarouselContent className='flex h-screen w-screen items-center'>
        <CarouselItem className='w-full'>
          <About />
        </CarouselItem>
        <CarouselItem>
          <p>Test</p>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}
