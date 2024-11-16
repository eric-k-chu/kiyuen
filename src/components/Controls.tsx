import { GITHUB, LINKEDIN } from '@/config'
import { GitHubLogoIcon, LinkedInLogoIcon, QuestionMarkCircledIcon } from '@radix-ui/react-icons'
import type { ReactElement } from 'react'
import { DirToggle } from './DirToggle'
import { ThemeToggle } from './ThemeToggle'
import { Button } from './ui/button'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from './ui/dialog'

export function Controls(): ReactElement {
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

function Help(): ReactElement {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='ghost' size='icon'>
          <QuestionMarkCircledIcon />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle className='sr-only'>Help</DialogTitle>
        <p className='text-xs'>
          Clicking on the side of the cards will transition to the next card.
        </p>
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
