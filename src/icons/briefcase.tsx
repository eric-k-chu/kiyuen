import { cn } from '@/lib'
import type { ReactElement } from 'react'
import type { IconProps } from './model'

export function BriefcaseIcon({ className, viewBox, xmlns, ...props }: IconProps): ReactElement {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 20'
      xmlSpace='preserve'
      className={cn('size-6', className)}
    >
      <title>Briefcase</title>
      <path d='M19 20H1c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h18c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1M2 18h16V8H2zM14 4h-2V2H8v2H6V1c0-.6.4-1 1-1h6c.6 0 1 .4 1 1z' />
    </svg>
  )
}
