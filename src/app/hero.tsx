import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import type { ReactElement } from 'react'
import meta from '~meta'

export function Hero(): ReactElement {
  return (
    <div className='grid h-dvh basis-1/2 place-content-center place-items-center gap-2 bg-yin text-yang uppercase'>
      <h1 className='text-2xl tracking-widest sm:text-4xl'>朱麒源</h1>
      <h1 className='text-lg tracking-widest sm:text-2xl'>Eric Chu</h1>
      <div className='flex space-x-8'>
        <a href={meta.github} target='_blank' rel='noopener noreferrer'>
          <GitHubLogoIcon className='size-4' />
          <div className='sr-only'>Github</div>
        </a>
        <a href={meta.linkedin} target='_blank' rel='noopener noreferrer'>
          <LinkedInLogoIcon className='size-4' />
          <div className='sr-only'>LinkedIn</div>
        </a>
      </div>
    </div>
  )
}
