import { cn } from '@/lib'
import type { ReactElement } from 'react'

type Props = {
  className?: string
}

export function Profile({ className }: Props): ReactElement {
  return (
    <div
      style={{
        filter: 'invert(1)',
        mixBlendMode: 'difference',
      }}
      className={cn('flex select-none flex-col items-center gap-y-3 text-foreground', className)}
    >
      <p className='px-1 text-lg'>
        朱<span className='sr-only'>Chu</span>
      </p>
      <p>
        <span aria-hidden>E</span>
        <br />
        <span aria-hidden>R</span>
        <br />
        <span aria-hidden>I</span>
        <br />
        <span aria-hidden>C</span>
        <span className='sr-only'>Eric</span>
      </p>
      <p>
        <span aria-hidden>C</span>
        <br />
        <span aria-hidden>H</span>
        <br />
        <span aria-hidden>U</span>
        <span className='sr-only'>Chu</span>
      </p>
    </div>
  )
}
