'use client'

import { Link, toId } from '@/common'

export type NavLinkProps = {
  link: Link
}

export function NavLink({ link }: NavLinkProps): React.ReactElement {
  return (
    <a
      href={toId(link)}
      className='inline-flex flex-col items-center uppercase tracking-wider hover:no-underline'
    >
      {link}
    </a>
  )
}
