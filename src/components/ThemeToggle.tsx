import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useTheme } from '@/lib'
import { DotsVerticalIcon } from '@radix-ui/react-icons'
import type { ReactElement } from 'react'

export function ThemeToggle(): ReactElement {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type='button'
          className='rounded-lg p-1 transition-colors hover:bg-accent focus:outline-none focus:ring-1 focus:ring-flamingo'
        >
          <DotsVerticalIcon />
          <span className='sr-only'>Select Theme</span>
        </button>
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
