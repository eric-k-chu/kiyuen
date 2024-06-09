import Image from 'next/image'

type Props = {
  className?: string
}

export function GitHubLink({ className = 'dark:invert' }: Props): React.ReactElement {
  return (
    <a href='https://github.com/eric-k-chu' rel='noreferrer noopener' target='_blank'>
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

export function LinkedInLink({ className }: Props): React.ReactElement {
  return (
    <a href='https://www.linkedin.com/in/eric-k-chu/' rel='noreferrer noopener' target='_blank'>
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
