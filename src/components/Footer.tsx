import { SITE_CONFIG } from '@/config'
import { ReactElement } from 'react'
import { GitHubLink, LinkedInLink } from './Socials'

export function Footer(): ReactElement {
  return (
    <footer className='relative grid min-h-64 w-full grid-cols-2 items-center border-t border-border bg-background p-6'>
      <strong className='text-center text-xl'>Eric Chu</strong>
      <div className='flex items-center justify-center gap-x-4'>
        <GitHubLink />
        <LinkedInLink />
      </div>
      <p className='absolute bottom-4 w-full text-center text-xs text-muted-foreground'>
        {`Updated ${SITE_CONFIG.updatedAt}`}
      </p>
    </footer>
  )
}
