import { cn } from '@/lib'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import type { ReactElement } from 'react'
import meta from '~meta'
import type { IconProps } from './model'

export function GithubIcon({ className }: IconProps): ReactElement {
  return (
    <a href={meta.github} target='_blank' rel='noopener noreferrer'>
      <GitHubLogoIcon className={cn('size-4 text-ctp-text', className)} />
      <div className='sr-only'>Github</div>
    </a>
  )
}
