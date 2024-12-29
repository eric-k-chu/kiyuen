import type { ReactElement } from 'react'
import { SECTIONS } from './util'

type Props = {
  current: string
}

export function NavSection({ current }: Props): ReactElement {
  return (
    <nav className='absolute right-4 z-10 grid h-full place-content-center gap-4'>
      {SECTIONS.map(({ id }) => (
        <a
          href={`#${id}`}
          key={id}
          data-status={current === id ? 'active' : 'inactive'}
          className='size-2 rounded-full bg-yin/50 transition-all data-[status=active]:bg-yin'
        >
          <span className='sr-only'>{id}</span>
        </a>
      ))}
    </nav>
  )
}
