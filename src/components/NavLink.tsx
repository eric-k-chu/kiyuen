'use client'

import { Link, toId } from '@/common'

export type NavLinkProps = {
  link: Link
}

export function NavLink({ link }: NavLinkProps): React.ReactElement {
  return (
    <a
      href={toId(link)}
      className='group font-medium uppercase tracking-wide text-muted-foreground transition-colors ease-in-out hover:text-foreground'
    >
      {link}
      <span
        aria-hidden
        className='block h-0.5 w-full max-w-0 bg-foreground transition-all ease-in-out group-hover:max-w-full'
      />
    </a>
  )
}
