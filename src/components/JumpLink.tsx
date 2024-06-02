import { cn } from '@/common'
import { AnchorHTMLAttributes, forwardRef } from 'react'

export type JumpLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: `#${string}`
}

const JumpLink = forwardRef<HTMLAnchorElement, JumpLinkProps>(
  ({ className, href, ...props }, ref) => (
    <a
      ref={ref}
      className={cn('decoration-primary underline-offset-2 hover:underline', className)}
      href={href}
      {...props}
    />
  )
)
JumpLink.displayName = 'JumpLink'

export { JumpLink }
