import { GithubIcon, LinkedInIcon } from '@/icons'
import type { ReactElement } from 'react'

export function Socials(): ReactElement {
  return (
    <div className='fixed right-2 bottom-2 flex flex-col items-center gap-4 p-4'>
      <GithubIcon className='size-5' />
      <LinkedInIcon className='size-5' />
    </div>
  )
}
