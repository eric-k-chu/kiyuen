import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components'
import { useTheme } from '@/hooks'
import { DotsVerticalIcon } from '@radix-ui/react-icons'
import type { ReactElement } from 'react'

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
