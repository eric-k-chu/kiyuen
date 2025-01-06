import { GithubIcon, LinkedInIcon } from '@/icons'
import type { ReactElement } from 'react'

export function Socials(): ReactElement {
  return (
    <div className='fixed right-2 bottom-2 flex items-center gap-4 rounded-md bg-ctp-mantle p-2'>
      <GithubIcon className='size-5' />
      <LinkedInIcon className='size-5' />
    </div>
  )
}
