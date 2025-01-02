import { cn } from '@/lib'
import { CornerBottomRightIcon, CornerTopLeftIcon } from '@radix-ui/react-icons'
import type { ElementType, HTMLAttributes, ReactElement } from 'react'

type Props = HTMLAttributes<HTMLElement> & {
  as: ElementType
}

export function Corners({
  as: Component = 'div',
  children,
  className,
  ...props
}: Props): ReactElement {
  return (
    <Component {...props} className={cn('relative p-4', className)}>
      <CornerTopLeftIcon className='absolute top-0 left-0 size-4 sm:size-6' />
      {children}
      <CornerBottomRightIcon className='absolute right-0 bottom-0 size-4 sm:size-6' />
    </Component>
  )
}
