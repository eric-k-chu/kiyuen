import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components'
import { useDir, useTheme } from '@/hooks'
import { cn } from '@/lib'
import {
  DotsVerticalIcon,
  GitHubLogoIcon,
  HomeIcon,
  LinkedInLogoIcon,
  ReaderIcon,
} from '@radix-ui/react-icons'
import { Link } from '@tanstack/react-router'
import type { ReactElement } from 'react'
import meta from '~meta'

type Props = {
  className?: string
}

export function Menubar({ className }: Props): ReactElement {
  return (
    <div className={cn('flex flex-col items-center gap-3', className)}>
      <Button asChild variant='ghost' size='icon'>
        <Link to='/'>
          <HomeIcon />
        </Link>
      </Button>
      <Button asChild variant='ghost' size='icon'>
        <Link to='/blog'>
          <ReaderIcon />
        </Link>
      </Button>
      <Button asChild variant='ghost' size='icon'>
        <a href={meta.github} target='_blank' rel='noopener noreferrer'>
          <GitHubLogoIcon />
        </a>
      </Button>
      <Button asChild variant='ghost' size='icon'>
        <a href={meta.linkedin} target='_blank' rel='noopener noreferrer'>
          <LinkedInLogoIcon />
        </a>
      </Button>
      <DirToggle />
      <ThemeToggle />
    </div>
  )
}

function DirToggle(): ReactElement {
  const { dir, toggle } = useDir()
  return (
    <Button onClick={toggle} className='text-[0.5rem] uppercase' variant='outline' size='icon'>
      {dir}
    </Button>
  )
}

function ThemeToggle(): ReactElement {
  const { set } = useTheme()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='icon'>
          <DotsVerticalIcon />
          <span className='sr-only'>Select Theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='start'>
        <DropdownMenuItem className='text-xs' onClick={(): void => set('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem className='text-xs' onClick={(): void => set('dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem className='text-xs' onClick={(): void => set('system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
