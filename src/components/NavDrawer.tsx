'use client'

import { LINKS } from '@/common'
import { Menu } from 'lucide-react'
import { GitHubLink, LinkedInLink } from './Socials'
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
        <nav className='my-4 flex flex-col items-start gap-y-4'>
          {LINKS.map((link) => (
            <SheetLink key={link} link={link} />
          ))}
        </nav>
        <SheetFooter className='mt-auto'>
          <GitHubLink />
          <LinkedInLink />
          <ThemeToggle className='ml-auto' />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
