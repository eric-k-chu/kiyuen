import { Link } from '@/model'
import { ReactElement } from 'react'

export type NavLinkProps = {
  link: Link
}

export function NavLink({ link }: NavLinkProps): ReactElement {
  return (
    <a
      href={`#${link.toLowerCase()}`}
      className='group text-muted-foreground transition-colors ease-in-out hover:text-foreground'
    >
      {link}
      <span
        aria-hidden
        className='block h-0.5 w-full max-w-0 bg-foreground transition-all ease-in-out group-hover:max-w-full'
      />
    </a>
  )
}
