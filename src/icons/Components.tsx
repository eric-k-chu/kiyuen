import type { ReactNode } from 'react'
import type { Props } from './props'

export function Components(props: Props): ReactNode {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      color='currentColor'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
    >
      <title>{props.title || 'Components'}</title>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M3 12l3 3l3 -3l-3 -3z' />
      <path d='M15 12l3 3l3 -3l-3 -3z' />
      <path d='M9 6l3 3l3 -3l-3 -3z' />
      <path d='M9 18l3 3l3 -3l-3 -3z' />
    </svg>
  )
}
