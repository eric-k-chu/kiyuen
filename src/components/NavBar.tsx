'use client'

import { NavDrawer } from './NavDrawer'
import { ThemeToggle } from './ThemeToggle'
import { Button, useCarousel } from './ui'

export function NavBar(): React.ReactElement {
  const { scrollTo } = useCarousel()

  return (
    <div className='fixed top-0 z-10 flex w-screen items-center justify-between border-b bg-background p-3 sm:p-4'>
      <h1>Logo</h1>
      <nav className='hidden items-center gap-x-4 sm:flex'>
        <Button variant='link' className='text-base' reader='About' onClick={() => scrollTo(0)}>
          About
        </Button>
        <Button
          variant='link'
          className='text-base'
          reader='Experience'
          onClick={() => scrollTo(1)}
        >
          Experience
        </Button>
        <Button variant='link' className='text-base' reader='Projects' onClick={() => scrollTo(2)}>
          Projects
        </Button>
        <Button variant='link' className='text-base' reader='Contact' onClick={() => scrollTo(3)}>
          Contact
        </Button>
      </nav>
      <ThemeToggle className='hidden sm:inline-flex' />
      <NavDrawer />
    </div>
  )
}
