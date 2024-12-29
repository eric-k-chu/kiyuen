'use client'

import type { ComponentProps, PropsWithChildren, ReactElement } from 'react'
import { InView } from 'react-intersection-observer'

type Props = PropsWithChildren<
  ComponentProps<'section'> & {
    id: string
    className?: string
    onViewEnter: (inView: boolean, entry: IntersectionObserverEntry) => void
  }
>

export function SnapSection({
  children,
  id,
  className,
  onViewEnter,
  ...rest
}: Props): ReactElement {
  return (
    <InView onChange={onViewEnter} threshold={1}>
      {({ ref }): ReactElement => (
        <section id={id} ref={ref} className={`${className}`} {...rest}>
          {children}
        </section>
      )}
    </InView>
  )
}
