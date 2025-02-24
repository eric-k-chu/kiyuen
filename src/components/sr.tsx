import type { ReactElement } from 'react'

type Props = {
  text: string
}

export function Sr({ text }: Props): ReactElement {
  return <span className='sr-only'>{text}</span>
}
