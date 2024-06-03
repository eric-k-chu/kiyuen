'use client'

import { Link, cn } from '@/common'
import { Button, useCarousel } from './ui'

export type NavLinkProps = {
  link: Link
  index: number
}

export function NavLink({ link, index }: NavLinkProps): React.ReactElement {
  const { scrollTo, current } = useCarousel()
  const className = current === index ? 'max-w-full' : 'max-w-0'
  return (
    <Button
      variant='link'
      className='inline-flex flex-col items-center hover:no-underline'
      reader={link}
      onClick={() => scrollTo(index)}
    >
      {link}
      <span
        aria-hidden
        className={cn('block h-0.5 w-full bg-primary transition-all ease-in-out', className)}
      />
    </Button>
  )
}
