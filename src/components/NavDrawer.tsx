import { SITE_CONFIG } from '@/config'
import { Menu } from 'lucide-react'
import { ReactElement } from 'react'
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

export function NavDrawer(): ReactElement {
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
        <SheetHeader className='border-b border-border pb-5'>
          <SheetTitle asChild>
            <strong className='cursor-default select-none text-xl' aria-hidden>
              朱
            </strong>
          </SheetTitle>
        </SheetHeader>
        <nav className='my-4 flex flex-col items-start gap-y-4'>
          {SITE_CONFIG.navLinks.map((link) => (
            <SheetLink key={link} link={link} />
          ))}
        </nav>
        <SheetFooter className='mt-auto border-t border-border pt-5'>
          <GitHubLink />
          <LinkedInLink />
          <ThemeToggle className='ml-auto' />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
