import { cn } from '@/lib'
import type { ReactElement } from 'react'
import type { IconProps } from './model'

export function ShadcnUi({ className, viewBox, xmlns, ...props }: IconProps): ReactElement {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 256 256'
      className={cn('size-5', className)}
    >
      <title>Built With shadcn-ui</title>
      <rect width='256' height='256' fill='none' />
      <line
        x1='208'
        y1='128'
        x2='128'
        y2='208'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='32'
      />
      <line
        x1='192'
        y1='40'
        x2='40'
        y2='192'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='32'
      />
    </svg>
  )
}