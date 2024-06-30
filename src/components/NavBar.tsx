import { SITE_CONFIG } from '@/config'
import { ReactNode } from 'react'
import { NavDrawer } from './NavDrawer'
import { NavLink } from './NavLink'
import { ThemeToggle } from './ThemeToggle'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui'

export function NavBar(): ReactNode {
  return (
    <div className='fixed top-0 z-20 w-screen border-b bg-background px-4 py-3'>
      <div className='mx-auto flex w-full max-w-full items-center gap-x-8 sm:max-w-7xl'>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <strong className='cursor-default select-none text-xl text-foreground' aria-hidden>
                朱 ERIC CHU
              </strong>
            </TooltipTrigger>
            <TooltipContent>Eric Chu</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <nav className='hidden items-center gap-x-8 text-sm sm:flex'>
          {SITE_CONFIG.navLinks.map((link) => (
            <NavLink key={link} link={link} />
          ))}
        </nav>
        <ThemeToggle className='ml-auto hidden sm:inline-flex' />
        <NavDrawer />
      </div>
    </div>
  )
}
