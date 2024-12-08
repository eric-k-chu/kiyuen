import { cn } from '@/lib'
import {
  Link,
  type LinkComponent,
  type LinkComponentProps,
  createLink,
} from '@tanstack/react-router'
import type { AnchorHTMLAttributes, ReactElement } from 'react'
import { Button, type ButtonProps } from './button'

type BaseLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  ButtonProps & {
    linkClassName?: string
  }

function BaseLink({ className, variant, linkClassName, ...props }: BaseLinkProps): ReactElement {
  return (
    <Button asChild variant={variant || 'ghost'} size={props.size} className={className}>
      <Link className={cn('text-xs', linkClassName)} {...props}>
        {props.children}
      </Link>
    </Button>
  )
}

const LinkNav = createLink(BaseLink)

export type NavLinkProps = LinkComponentProps<typeof BaseLink>

export const NavLink: LinkComponent<typeof BaseLink> = (props): ReactElement => {
  return <LinkNav preload='intent' {...props} />
}
