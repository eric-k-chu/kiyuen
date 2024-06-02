import { ThemeToggle } from './ThemeToggle'

export function NavBar(): React.ReactElement {
  return (
    <nav className='fixed top-0 flex w-screen items-center justify-between border-b bg-background p-4'>
      <h1>Logo</h1>
      <div className='flex items-center gap-x-4'>
        <a>About</a>
        <a>Experience</a>
        <a>Projects</a>
        <a>Contact</a>
        <ThemeToggle />
      </div>
    </nav>
  )
}
