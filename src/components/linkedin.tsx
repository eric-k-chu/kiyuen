import { cn } from '@/lib'
import { Linkedin } from 'lucide-react'
import type { ReactElement } from 'react'
import meta from '~meta'
import { Icon } from './icon'
import type { IconProps } from './model'

export function LinkedInIcon({ className }: IconProps): ReactElement {
  return (
    <a href={meta.linkedin} target='_blank' rel='noopener noreferrer'>
      <Icon icon={Linkedin} className={cn('size-4 text-ctp-text', className)} text='linkedin' />
    </a>
  )
}
