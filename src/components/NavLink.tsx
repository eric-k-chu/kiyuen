'use client'

import { Link } from '@/common'
import { Button, useCarousel } from './ui'

export type NavLinkProps = {
  link: Link
  index: number
}

export function NavLink({ link, index }: NavLinkProps): React.ReactElement {
  const { scrollTo } = useCarousel()
  return (
    <Button variant='link' className='text-base' reader={link} onClick={() => scrollTo(index)}>
      {link}
    </Button>
  )
}
