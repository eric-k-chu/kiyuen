import { cn } from '@/lib'
import type { ElementType, HTMLAttributes, ReactElement } from 'react'
import { Sr } from './sr'

type Props = HTMLAttributes<HTMLElement> & {
  icon: ElementType
  text: string
}

export function Icon({ icon: Comp, text, className, ...props }: Props): ReactElement {
  return (
    <>
      <Comp {...props} className={cn('inline hover:text-ctp-pink', className)} />
      <Sr text={text} />
    </>
  )
}
