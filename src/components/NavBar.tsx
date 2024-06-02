import { ThemeToggle } from './ThemeToggle'

export function NavBar(): React.ReactElement {
  return (
    <nav className='fixed top-0 flex w-screen items-center justify-between border-b p-4'>
      <h1>Logo</h1>
      <ul className='flex items-center gap-x-4'>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Experience</a>
        </li>
        <li>
          <a>Projects</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  )
}
