'use client'

import { Menu } from 'lucide-react'
import Image from 'next/image'
import { ThemeToggle } from './ThemeToggle'
import {
  Button,
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  useCarousel,
} from './ui'

export function NavDrawer(): React.ReactElement {
  const { scrollTo } = useCarousel()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant='ghost'
          size='icon'
          reader='Open Navigation'
          className='inline-flex sm:hidden'
        >
          <Menu size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent className='flex flex-col'>
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>
        <nav className='my-4 flex flex-col gap-y-4'>
          <SheetClose asChild>
            <Button variant='link' className='text-base' reader='About' onClick={() => scrollTo(0)}>
              About
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button variant='link' className='text-base' reader='About' onClick={() => scrollTo(1)}>
              Experience
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button variant='link' className='text-base' reader='About' onClick={() => scrollTo(2)}>
              Projects
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button variant='link' className='text-base' reader='About' onClick={() => scrollTo(3)}>
              Contact
            </Button>
          </SheetClose>
        </nav>
        <SheetFooter className='mt-auto'>
          <a href='https://github.com/eric-k-chu' rel='noreferrer noopener' target='_blank'>
            <Image
              className='dark:invert'
              src='/github.svg'
              alt='GitHub Logo'
              width={24}
              height={24}
              priority
            />
          </a>
          <a
            href='https://www.linkedin.com/in/eric-k-chu/'
            rel='noreferrer noopener'
            target='_blank'
          >
            <Image src='/linkedin.svg' alt='LinkedIn Logo' width={24} height={24} priority />
          </a>
          <ThemeToggle className='ml-auto' />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
