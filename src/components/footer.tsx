import { cn } from '@/lib'
import type { ReactElement } from 'react'

type Props = {
  className?: string
}

export function Footer({ className }: Props): ReactElement {
  const year = new Date().getFullYear()
  return (
    <footer className={cn('p-2 text-ctp-subtext0 text-xs', className)}>
      <p>
        &copy; <time dateTime={year.toString()}>{year}</time> Eric Chu
      </p>
    </footer>
  )
}
