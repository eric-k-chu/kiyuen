import { useDir } from '@/lib'
import type { ReactElement } from 'react'
import { Button } from './ui/button'

export function DirToggle(): ReactElement {
  const { dir, toggle } = useDir()
  return (
    <Button onClick={toggle} className='text-[0.5rem] uppercase' variant='outline' size='icon'>
      {dir}
    </Button>
  )
}