import { GITHUB, LINKEDIN } from '@/config'
import { cn } from '@/lib'
import { GitHubLogoIcon, LinkedInLogoIcon, QuestionMarkCircledIcon } from '@radix-ui/react-icons'
import type { AnchorHTMLAttributes, PropsWithChildren, ReactElement } from 'react'
import { Icon } from './Icon'
import { ThemeToggle } from './ThemeToggle'
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog'

export function Socials(): ReactElement {
  return (
    <div className='flex flex-col items-center gap-y-3'>
      <ExternalLink href={GITHUB}>
        <GitHubLogoIcon />
      </ExternalLink>
      <ExternalLink href={LINKEDIN}>
        <LinkedInLogoIcon />
      </ExternalLink>
      <Help />
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
        'flex items-center justify-center gap-x-2 rounded-lg p-1 transition-colors hover:bg-accent focus:outline-none focus:ring-1 focus:ring-flamingo',
        props.className
      )}
      target='_blank'
      rel='noreferrer'
    >
      {props.children}
    </a>
  )
}

function Help(): ReactElement {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Icon>
          <QuestionMarkCircledIcon />
        </Icon>
      </DialogTrigger>
      <DialogContent>
        <p className='text-xs'>Clicking on the cards will navigate through the sections.</p>
        <p className='text-xs'>
          Alternatively, the <CSpan t='←' /> or <CSpan t='h' /> and <CSpan t='→' /> or{' '}
          <CSpan t='l' /> keys can be used for navigation.
        </p>
      </DialogContent>
    </Dialog>
  )
}

function CSpan({ t }: { t: string }): ReactElement {
  return <span className='font-bold text-flamingo text-sm'>{t}</span>
}
