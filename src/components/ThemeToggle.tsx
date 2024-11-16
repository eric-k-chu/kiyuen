import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useTheme } from '@/lib'
import { DotsVerticalIcon } from '@radix-ui/react-icons'
import type { ReactElement } from 'react'
import { Button } from './ui/button'

export function ThemeToggle(): ReactElement {
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
        <DropdownMenuItem className='text-xs' onClick={() => set('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem className='text-xs' onClick={() => set('dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem className='text-xs' onClick={() => set('system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
