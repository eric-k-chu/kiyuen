import { cn } from '@/lib'
import type { AnchorHTMLAttributes, ReactElement, ReactNode } from 'react'

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: NonNullable<AnchorHTMLAttributes<HTMLAnchorElement>['href']>
  rightSection?: ReactNode
  children?: ReactNode
  leftSection?: ReactNode
}

export function ExternalLink({ leftSection, title, rightSection, ...props }: Props): ReactElement {
  return (
    <a
      {...props}
      className={cn('flex items-center justify-center gap-x-2', props.className)}
      target='_blank'
      rel='noreferrer'
    >
      {leftSection}
      {props.children}
      {rightSection}
    </a>
  )
}
