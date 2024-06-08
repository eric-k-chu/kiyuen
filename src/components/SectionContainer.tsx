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
        'dark: flex min-w-0 shrink-0 grow-0 basis-full items-center justify-center from-background via-pink-50 to-sky-100 even:w-full even:bg-gradient-to-tr',
        className
      )}
      id={id}
    >
      {children}
    </section>
  )
}
