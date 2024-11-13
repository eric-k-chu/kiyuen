import { cn } from '@/lib'
import type { ButtonHTMLAttributes, PropsWithChildren, ReactElement } from 'react'

type Props = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>

export function Icon({ children, ...props }: Props): ReactElement {
  return (
    <button
      type='button'
      className={cn(
        'rounded-lg p-1 transition-colors hover:bg-accent focus:outline-none focus:ring-1 focus:ring-flamingo',
        props.className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
