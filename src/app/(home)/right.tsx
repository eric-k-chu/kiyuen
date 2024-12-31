import { type WithCn, cn } from '@/lib'
import type { PropsWithChildren, ReactElement } from 'react'

type Props = PropsWithChildren<WithCn>

export function Right({ className, children }: Props): ReactElement {
  return <section className={cn('rounded-sm p-4', className)}>{children}</section>
}
