import { cn } from '@/common'
import { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  id: string
  className?: string
}>

// #bfe8fe
// #f6e3f6
export function SectionContainer({ children, id, className }: Props): React.ReactElement {
  return (
    <section
      className={cn(
        'flex w-full min-w-0 shrink-0 grow-0 basis-full items-center justify-center py-4 first:bg-gradient-to-t first:from-background first:to-transparent [&:not(:first-child)]:odd:bg-gradient-to-b [&:not(:first-child)]:odd:from-background [&:not(:first-child)]:odd:via-background/40 [&:not(:first-child)]:odd:via-30% [&:not(:first-child)]:odd:to-background [&:not(:first-child)]:odd:to-90% [&:not(:first-child)]:even:bg-background',
        className
      )}
      id={id}
    >
      {children}
    </section>
  )
}
