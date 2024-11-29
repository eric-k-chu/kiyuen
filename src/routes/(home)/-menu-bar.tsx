import { Button } from '@/components'
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import type { ReactElement } from 'react'
import meta from '~meta'
import { DirToggle } from './-dir'
import { Help } from './-help'
import { ThemeToggle } from './-theme'

export function Menubar(): ReactElement {
  return (
    <div className='flex flex-col items-center gap-y-3'>
      <Button asChild variant='ghost' size='icon'>
        <a href={meta.github} target='_blank' rel='noopener noreferrer'>
          <GitHubLogoIcon />
        </a>
      </Button>
      <Button asChild variant='ghost' size='icon'>
        <a href={meta.linkedin} target='_blank' rel='noopener noreferrer'>
          <LinkedInLogoIcon />
        </a>
      </Button>
      <Help />
      <DirToggle />
      <ThemeToggle />
    </div>
  )
}
