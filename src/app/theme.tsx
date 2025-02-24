'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import type { ReactElement } from 'react'

export function ThemeToggle(): ReactElement {
  const { theme, setTheme } = useTheme()
  return (
    <div className='fixed right-4 bottom-4 flex size-8 items-center justify-center rounded-full bg-ctp-mantle p-2'>
      <button
        onClick={(): void => {
          setTheme(theme === 'dark' ? 'light' : 'dark')
        }}
        type='button'
        className='hover:cursor-pointer'
      >
        {theme === 'dark' ? <Sun className='size-4' /> : <Moon className='size-4' />}
      </button>
    </div>
  )
}
