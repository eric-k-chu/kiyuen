'use client'

import { Link, toId } from '@/common'

export type NavLinkProps = {
  link: Link
}

export function NavLink({ link }: NavLinkProps): React.ReactElement {
  return (
    <a
      href={toId(link)}
      className='font-medium uppercase tracking-wide text-muted-foreground transition-colors ease-in-out hover:text-foreground'
    >
      {link}
    </a>
  )
}
