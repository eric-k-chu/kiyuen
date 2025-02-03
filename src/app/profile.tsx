import { Profile as AvatarProfile } from '@/components'
import { cn } from '@/lib'
import { GitHubLogoIcon, HomeIcon, LinkedInLogoIcon, ReaderIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import type { ComponentProps, ElementType, ReactElement } from 'react'
import meta from '~meta'

export function Profile(): ReactElement {
  const year = new Date().getFullYear()
  return (
    <div className='flex h-full gap-4 p-4 text-sm md:flex-col md:py-8'>
      <div className='flex items-center gap-2'>
        <AvatarProfile />
        <div className='ml-2'>
          <h1 className='font-black text-base'>kiyuen</h1>
          <h2 className='text-ctp-overlay2 text-xs'>eric chu</h2>
        </div>
      </div>
      <NavLink as={Link} icon={HomeIcon} name='home' href='/' />
      <NavLink as={Link} icon={ReaderIcon} name='blogs' href='/blogs' />
      <NavLink
        as='a'
        name='gh/eric-k-chu'
        icon={GitHubLogoIcon}
        href={meta.github}
        target='_blank'
        rel='noopener noreferrer'
      />
      <NavLink
        as='a'
        name='in/eric-k-chu'
        icon={LinkedInLogoIcon}
        href={meta.linkedin}
        target='_blank'
        rel='noopener noreferrer'
      />
      <div className='mt-auto text-ctp-overlay2 text-xs'>
        &copy; <time dateTime={year.toString()}>{year}</time> {meta.name}
      </div>
    </div>
  )
}

type NavLinkProps<T extends ElementType> = ComponentProps<T> & {
  as: T
  icon: ElementType
  name: string
}

function NavLink<T extends ElementType>({
  as: As,
  icon: Icon,
  name,
  className,
  ...props
}: NavLinkProps<T>): ReactElement {
  return (
    <As
      className={cn(
        'flex translate-x-0 items-center gap-2 py-2 text-ctp-overlay2 transition-all hover:translate-x-2 hover:text-ctp-text',
        className
      )}
      {...props}
    >
      <Icon className='size-4' />
      <span className='hidden md:block'>{name}</span>
    </As>
  )
}
