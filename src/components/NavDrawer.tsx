import { Menu } from 'lucide-react'
import Image from 'next/image'
import { ThemeToggle } from './ThemeToggle'
import {
  Button,
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetLink,
  SheetTitle,
  SheetTrigger,
} from './ui'

export function NavDrawer(): React.ReactElement {
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
          <SheetLink href='#about'>About</SheetLink>
          <SheetLink href='#experience'>Experience</SheetLink>
          <SheetLink href='#projects'>Projects</SheetLink>
          <SheetLink href='#contacts'>Contact</SheetLink>
        </nav>
        <SheetFooter className='mt-auto'>
          <a href='https://github.com/eric-k-chu' rel='noreferrer noopener' target='_blank'>
            <Image
              className='dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
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
            <Image
              className='dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
              src='/linkedin.svg'
              alt='LinkedIn Logo'
              width={24}
              height={24}
              priority
            />
          </a>
          <ThemeToggle className='ml-auto' />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
