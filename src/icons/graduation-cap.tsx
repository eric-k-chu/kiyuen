import { cn } from '@/lib'
import type { ReactElement } from 'react'
import type { IconProps } from './model'

export function GraduationCapIcon({
  className,
  viewBox,
  xmlns,
  ...props
}: IconProps): ReactElement {
  return (
    <svg
      viewBox='0 0 16 16'
      xmlns='http://www.w3.org/2000/svg'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='1.5'
      className={cn('size-6', className)}
      {...props}
    >
      <title>Graduation Cap</title>
      <path d='M14.25 9.25V6L8 2.75 1.75 6 8 9.25l3.25-1.5v3.5c0 1-1.5 2-3.25 2s-3.25-1-3.25-2v-3.5' />
    </svg>
  )
}
