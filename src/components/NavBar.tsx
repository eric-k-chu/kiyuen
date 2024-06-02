import { JumpLink } from './JumpLink'
import { NavDrawer } from './NavDrawer'
import { ThemeToggle } from './ThemeToggle'

export function NavBar(): React.ReactElement {
  return (
    <div className='fixed top-0 z-10 flex w-screen items-center justify-between border-b bg-background p-3 sm:p-4'>
      <h1>Logo</h1>
      <nav className='hidden items-center gap-x-4 sm:flex'>
        <JumpLink href='#about'>About</JumpLink>
        <JumpLink href='#experience'>Experience</JumpLink>
        <JumpLink href='#projects'>Projects</JumpLink>
        <JumpLink href='#contact'>Contact</JumpLink>
      </nav>
      <ThemeToggle className='hidden sm:inline-flex' />
      <NavDrawer />
    </div>
  )
}
