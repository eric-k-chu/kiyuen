import { LINKS } from '@/common'
import { NavDrawer } from './NavDrawer'
import { NavLink } from './NavLink'
import { ThemeToggle } from './ThemeToggle'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui'

export function NavBar(): React.ReactElement {
  return (
    <div className='fixed top-0 z-10 flex w-screen items-center justify-between border-b bg-background px-4 py-1'>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <strong className='cursor-default select-none text-xl' aria-hidden>
              朱
            </strong>
          </TooltipTrigger>
          <TooltipContent>Chu</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <nav className='hidden items-center gap-x-12 sm:flex'>
        {LINKS.map((link) => (
          <NavLink key={link} link={link} />
        ))}
      </nav>
      <ThemeToggle className='hidden sm:inline-flex' />
      <NavDrawer />
    </div>
  )
}
