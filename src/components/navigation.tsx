import { Home, Newspaper, TerminalSquare } from 'lucide-react'
import Link from 'next/link'
import type { ElementType, HTMLAttributes, ReactElement } from 'react'
import { GithubIcon } from './github'
import { Icon } from './icon'
import { LinkedInIcon } from './linkedin'

const links = [
  { href: '/', icon: Home, text: 'home' },
  { href: '/blogs', icon: Newspaper, text: 'blogs' },
  { href: '/terminal', icon: TerminalSquare, text: 'terminal' },
] as const

type Props = HTMLAttributes<HTMLElement> & {
  as?: ElementType
  hide?: (typeof links)[number]['text'][]
}

export function Navigation({
  as: Component = 'div',
  children,
  hide = [],
  ...props
}: Props): ReactElement {
  const iconLinks = links.filter(({ text }) => !hide.includes(text))
  return (
    <Component {...props}>
      <GithubIcon />
      <LinkedInIcon />
      {iconLinks.map(({ href, icon, text }) => (
        <Link key={text} href={href}>
          <Icon text={text} className='size-4' icon={icon} />
        </Link>
      ))}
      {children}
    </Component>
  )
}
