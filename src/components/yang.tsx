import { cn } from '@/lib'
import type { ComponentProps, PropsWithChildren, ReactElement } from 'react'

type Props = PropsWithChildren<ComponentProps<'section'>>

export function Yang({ className, children, ...props }: Props): ReactElement {
  return (
    <section className={cn('h-dvh basis-1/2 bg-yang text-yin', className)} {...props}>
      {children}
    </section>
  )
}
