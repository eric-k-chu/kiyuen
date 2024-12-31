import { type WithCn, cn } from '@/lib'
import type { PropsWithChildren, ReactElement } from 'react'

type Props = PropsWithChildren<WithCn>

export function Left({ className, children }: Props): ReactElement {
  return (
    <section className={cn('size-full basis-full rounded-sm p-4 sm:basis-1/2', className)}>
      {children}
    </section>
  )
}
