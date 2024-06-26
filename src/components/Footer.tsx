import { SITE_CONFIG } from '@/config'
import { ReactNode } from 'react'
import { GitHubLink, LinkedInLink } from './Socials'

export function Footer(): ReactNode {
  return (
    <footer className='relative grid min-h-64 w-full grid-cols-2 items-center border-t border-border bg-primary p-6'>
      <strong className='text-center text-xl text-primary-foreground'>Eric Chu</strong>
      <div className='flex items-center justify-center gap-x-4'>
        <GitHubLink className='invert' />
        <LinkedInLink className='invert' />
      </div>
      <p className='absolute bottom-4 w-full text-center text-xs text-primary-foreground'>
        {`Updated ${SITE_CONFIG.updatedAt}`}
      </p>
    </footer>
  )
}
