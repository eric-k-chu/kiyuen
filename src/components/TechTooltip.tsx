import { Tech, cn } from '@/common'
import Image from 'next/image'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui'

export function TechTooltip({
  src,
  alt,
  invert,
  size = 24,
}: Tech & { size?: number }): React.ReactElement {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Image
            src={src}
            alt={alt}
            width={size}
            height={size}
            className={cn('scale-75 sm:scale-100', invert && 'dark:invert')}
          />
        </TooltipTrigger>
        <TooltipContent>{alt}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
