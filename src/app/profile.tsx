import { Profile as AvatarProfile } from '@/components'
import { GitHubLogoIcon, HomeIcon, LinkedInLogoIcon, ReaderIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import type { ElementType, PropsWithChildren, ReactElement } from 'react'
import meta from '~meta'

export function Profile(): ReactElement {
  return (
    <div className='flex gap-4 p-4 text-sm md:flex-col md:py-8'>
      <Group>
        <AvatarProfile />
        <h1 className='ml-2 font-black text-ctp-flamingo'>kiyuen</h1>
      </Group>
      <Group icon={HomeIcon}>
        <Link href='/' className='hover:underline'>
          home
        </Link>
      </Group>
      <Group icon={ReaderIcon}>
        <Link href='/blogs' className='hover:underline'>
          blogs
        </Link>
      </Group>
      <Social icon={GitHubLogoIcon} href={meta.github} prefix='gh' />
      <Social icon={LinkedInLogoIcon} href={meta.linkedin} prefix='in' />
    </div>
  )
}

type SocialProps = {
  icon?: ElementType
  href: string
  prefix: string
}

function Social({ icon: Icon, href, prefix }: SocialProps): ReactElement {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='flex items-center gap-2 hover:underline'
    >
      {Icon && <Icon className='size-4 text-ctp-subtext0' />}
      <span className='hidden md:block'>{`${prefix}/${href.split('/').pop()}`}</span>
    </a>
  )
}

function NavLink(): ReactElement {
  return (
    <Link href='/blogs' className='flex items-center gap-2 hover:underline'>
      <span></span>
    </Link>
  )
}

function Group({ children, icon: Icon }: PropsWithChildren<{ icon?: ElementType }>): ReactElement {
  return (
    <div className='flex items-center gap-2'>
      {Icon && <Icon className='size-4 text-ctp-subtext0' />}
      {children}
    </div>
  )
}
