import type { ReactElement } from 'react'
import { Link } from 'react-router'
import { Button } from '../ui'

const PAGES = [
  { title: 'Home', path: '/' },
  { title: 'Play', path: '/play' },
]

export function Navigation(): ReactElement {
  return (
    <nav className='fixed bottom-3 w-screen'>
      <div className='mx-auto w-fit rounded-md border border-border'>
        {PAGES.map(({ title, path }, i) => (
          <Button key={title} asChild variant='ghost' className={roundCorners(i, PAGES.length)}>
            <Link className='text-xs' to={path}>
              {title}
            </Link>
          </Button>
        ))}
      </div>
    </nav>
  )
}

function roundCorners(i: number, length: number): string | undefined {
  if (i === 0) return 'rounded-r-none'
  if (i === length - 1) return 'rounded-l-none'
}
