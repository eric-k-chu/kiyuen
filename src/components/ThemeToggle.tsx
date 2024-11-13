import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useTheme } from '@/lib'
import { DotsVerticalIcon } from '@radix-ui/react-icons'
import type { ReactElement } from 'react'
import { Icon } from './Icon'

export function ThemeToggle(): ReactElement {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Icon>
          <DotsVerticalIcon />
          <span className='sr-only'>Select Theme</span>
        </Icon>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='start'>
        <DropdownMenuItem
          className='hover:bg-accent hover:text-accent-foreground'
          onClick={() => setTheme('light')}
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          className='hover:bg-accent hover:text-accent-foreground'
          onClick={() => setTheme('dark')}
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          className='hover:bg-accent hover:text-accent-foreground'
          onClick={() => setTheme('system')}
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
