import Link from 'next/link'
import type { ReactElement } from 'react'

const LINKS = [
  { href: '/', text: 'home' },
  { href: '/blogs', text: 'blogs' },
]

export function Nav(): ReactElement {
  return (
    <div className='fixed top-2 left-2 flex flex-col gap-4 p-2'>
      {LINKS.map(({ href, text }) => (
        <Link
          key={href + text}
          href={href}
          className='translate-x-0 text-ctp-blue transition-transform hover:translate-x-1'
        >
          {text}
        </Link>
      ))}
    </div>
  )
}
