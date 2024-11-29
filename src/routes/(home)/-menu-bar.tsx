import { Button } from '@/components'
import { GITHUB, LINKEDIN } from '@/config'
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import type { ReactElement } from 'react'
import { DirToggle } from './-dir'
import { Help } from './-help'
import { ThemeToggle } from './-theme'

export function Menubar(): ReactElement {
  return (
    <div className='flex flex-col items-center gap-y-3'>
      <Button asChild variant='ghost' size='icon'>
        <a href={GITHUB} target='_blank' rel='noopener noreferrer'>
          <GitHubLogoIcon />
        </a>
      </Button>
      <Button asChild variant='ghost' size='icon'>
        <a href={LINKEDIN} target='_blank' rel='noopener noreferrer'>
          <LinkedInLogoIcon />
        </a>
      </Button>
      <Help />
      <DirToggle />
      <ThemeToggle />
    </div>
  )
}
