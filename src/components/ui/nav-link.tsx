import { cn } from '@/lib'
import {
  Link,
  type LinkComponent,
  type LinkComponentProps,
  createLink,
} from '@tanstack/react-router'
import { type AnchorHTMLAttributes, forwardRef } from 'react'
import { Button, type ButtonProps } from './button'

type BaseLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  ButtonProps & {
    linkClassName?: string
  }

const BaseLink = forwardRef<HTMLAnchorElement, BaseLinkProps>(
  ({ className, variant, linkClassName, ...props }, ref) => (
    <Button asChild variant={variant || 'ghost'} size={props.size} className={className} {...props}>
      <Link ref={ref} {...props} className={cn('text-xs', linkClassName)}>
        {props.children}
      </Link>
    </Button>
  )
)

const LinkNav = createLink(BaseLink)

export type NavLinkProps = LinkComponentProps<typeof BaseLink>

export const NavLink: LinkComponent<typeof BaseLink> = (props) => {
  return <LinkNav preload='intent' {...props} />
}
