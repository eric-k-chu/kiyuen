import { cn } from '@/lib'
import type { PropsWithChildren, ReactElement } from 'react'

type Props = PropsWithChildren<{
  id: string
  className?: string
}>

export function SnapSection({ children, id, className }: Props): ReactElement {
  return (
    <section id={id} className='flex items-center justify-center'>
      <div className='basis-1/2' />
      <div
        className={cn('basis-1/2', className)}
        style={{ filter: 'invert(1)', mixBlendMode: 'difference' }}
      >
        {children}
      </div>
    </section>
  )
}
