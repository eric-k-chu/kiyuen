import { PORTFOLIO_CONFIG } from '@/config'
import Image from 'next/image'
import { ReactNode } from 'react'

type Props = {
  className?: string
}

export function GitHubLink({ className = 'dark:invert' }: Props): ReactNode {
  return (
    <a href={PORTFOLIO_CONFIG.socials.github} rel='noreferrer noopener' target='_blank'>
      <Image
        className={className}
        src='/github.svg'
        alt='GitHub Logo'
        width={24}
        height={24}
        priority
      />
    </a>
  )
}

export function LinkedInLink({ className = 'dark:invert' }: Props): ReactNode {
  return (
    <a href={PORTFOLIO_CONFIG.socials.linkedin} rel='noreferrer noopener' target='_blank'>
      <Image
        className={className}
        src='/linkedin.svg'
        alt='LinkedIn Logo'
        width={24}
        height={24}
        priority
      />
    </a>
  )
}
