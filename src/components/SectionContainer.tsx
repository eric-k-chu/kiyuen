import { cn } from '@/common'
import { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  id: string
  className?: string
}>

export function SectionContainer({ children, id, className }: Props): React.ReactElement {
  return (
    <section
      className={cn(
        'flex min-w-0 shrink-0 grow-0 basis-full items-center justify-center',
        className
      )}
      id={id}
    >
      {children}
    </section>
  )
}
