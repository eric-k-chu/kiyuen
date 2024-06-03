import { Tech } from '@/common'
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
            className={invert ? 'dark:invert' : undefined}
          />
        </TooltipTrigger>
        <TooltipContent>{alt}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
