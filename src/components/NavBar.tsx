import { LINKS } from '@/common'
import { NavDrawer } from './NavDrawer'
import { NavLink } from './NavLink'
import { ThemeToggle } from './ThemeToggle'

export function NavBar(): React.ReactElement {
  return (
    <div className='fixed top-0 z-10 flex w-screen items-center justify-between border-b bg-background px-4 py-1'>
      <h1>Logo</h1>
      <nav className='hidden items-center gap-x-4 sm:flex'>
        {LINKS.map((link, index) => (
          <NavLink key={link} link={link} index={index} />
        ))}
      </nav>
      <ThemeToggle className='hidden sm:inline-flex' />
      <NavDrawer />
    </div>
  )
}
