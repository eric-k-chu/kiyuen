import { cn } from '@/lib'
import type { ReactElement } from 'react'
import type { IconProps } from './model'

export function TetrisIcon({ className, viewBox, xmlns, ...props }: IconProps): ReactElement {
  return (
    <svg
      {...props}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      className={cn('size-6', className)}
    >
      <title>Tetris</title>
      <path d='M10.5 2h-4a1 1 0 0 0-1 1v5h6V3a1 1 0 0 0-1-1m-5 12a1 1 0 0 0 1 1h5V9h-6Zm12-5h-5v6h6v-5a1 1 0 0 0-1-1m-5 12a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-5h-6Z' />
    </svg>
  )
}
