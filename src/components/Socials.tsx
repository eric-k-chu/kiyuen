import { GITHUB, LINKEDIN } from '@/config'
import { cn } from '@/lib'
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import type { AnchorHTMLAttributes, PropsWithChildren, ReactElement } from 'react'
import { ThemeToggle } from './ThemeToggle'

export function Socials(): ReactElement {
  return (
    <div className='mt-1 flex flex-col items-center gap-y-4'>
      <ExternalLink href={GITHUB}>
        <GitHubLogoIcon />
      </ExternalLink>
      <ExternalLink href={LINKEDIN}>
        <LinkedInLogoIcon />
      </ExternalLink>
      <ThemeToggle />
    </div>
  )
}

function ExternalLink(
  props: PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>
): ReactElement {
  return (
    <a
      {...props}
      className={cn(
        'flex items-center justify-center gap-x-2 focus:outline-none focus:ring-1 focus:ring-flamingo',
        props.className
      )}
      target='_blank'
      rel='noreferrer'
    >
      {props.children}
    </a>
  )
}
