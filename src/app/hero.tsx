import { Yin } from '@/components'
import { GithubIcon, LinkedInIcon } from '@/icons'
import { cn } from '@/lib'
import type { ReactElement } from 'react'
import meta from '~meta'

type Props = {
  className?: string
}

export function Hero({ className }: Props): ReactElement {
  return (
    <Yin className={cn('gap-2 uppercase', className)} variant='center'>
      <h1 className='text-2xl tracking-widest sm:text-4xl'>{meta.hanzi}</h1>
      <h1 className='text-lg tracking-widest sm:text-2xl'>{meta.name}</h1>
      <div className='flex space-x-8'>
        <GithubIcon className='size-6' />
        <LinkedInIcon className='size-6' />
      </div>
    </Yin>
  )
}

export function MobileHero(): ReactElement {
  return (
    <div className='fixed top-4 left-4 flex w-fit items-center gap-4 rounded-sm bg-yin p-2 text-yang sm:hidden'>
      <h1 className='tracking-widest'>{meta.hanzi}</h1>
      <h1 className='text-xs tracking-widest'>{meta.name}</h1>
      <GithubIcon className='size-4' />
      <LinkedInIcon className='size-4' />
    </div>
  )
}
