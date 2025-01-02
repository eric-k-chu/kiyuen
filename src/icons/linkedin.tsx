import { cn } from '@/lib'
import { LinkedInLogoIcon } from '@radix-ui/react-icons'
import type { ReactElement } from 'react'
import meta from '~meta'
import type { IconProps } from './model'

export function LinkedInIcon({ className }: IconProps): ReactElement {
  return (
    <a href={meta.linkedin} target='_blank' rel='noopener noreferrer'>
      <LinkedInLogoIcon className={cn('size-4 text-yang', className)} />
      <div className='sr-only'>LinkedIn</div>
    </a>
  )
}
