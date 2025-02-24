import { cn } from '@/lib'
import { Github } from 'lucide-react'
import type { ReactElement } from 'react'
import meta from '~meta'
import { Icon } from './icon'
import type { IconProps } from './model'

export function GithubIcon({ className }: IconProps): ReactElement {
  return (
    <a href={meta.github} target='_blank' rel='noopener noreferrer'>
      <Icon icon={Github} text='github' className={cn('size-4 text-ctp-text', className)} />
    </a>
  )
}
