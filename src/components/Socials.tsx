import { GITHUB, LINKEDIN } from '@/config'
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import type { ReactElement } from 'react'
import { ExternalLink } from './ExternalLink'
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
