import { cn } from '@/lib'
import type { ReactElement } from 'react'

type Props = {
  pos: 'left' | 'right'
  onNavigate: () => void
}

export function Navigate({ pos, onNavigate }: Props): ReactElement {
  return (
    <button
      type='button'
      className={cn(
        pos === 'left'
          ? 'left-0 rounded-l-lg bg-gradient-to-r'
          : 'right-0 rounded-r-lg bg-gradient-to-l',
        'absolute z-[1] h-full w-1/6 focus:outline-none',
        'from-0% from-accent/0 to-80% hover:from-accent/30 dark:hover:from-accent/20'
      )}
      onClick={onNavigate}
    />
  )
}
