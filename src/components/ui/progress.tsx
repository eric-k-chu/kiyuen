import { type Dir, cn } from '@/lib'
import * as ProgressPrimitive from '@radix-ui/react-progress'
import * as React from 'react'

type ProgressProps = React.ComponentProps<typeof ProgressPrimitive.Root> & {
  dir?: Dir
}

const Progress = React.forwardRef<React.ElementRef<typeof ProgressPrimitive.Root>, ProgressProps>(
  ({ className, value, dir = 'ltr', ...props }, ref) => (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        'relative h-2 w-full overflow-hidden rounded-full border bg-background',
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className='h-full w-full flex-1 bg-primary transition-all'
        style={{ transform: `translateX(${dir === 'ltr' ? '-' : ''}${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
)
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
