import type { ReactNode } from 'react'
import type { Props } from './props'

export function At(props: Props): ReactNode {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='44'
      height='44'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='#2c3e50'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
    >
      <title>{props.title || 'At'}</title>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0' />
      <path d='M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28' />
    </svg>
  )
}
