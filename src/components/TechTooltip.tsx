import { Tech } from '@/common'
import Image from 'next/image'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui'

export function TechTooltip({ src, alt, invert }: Tech): React.ReactElement {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Image
            src={src}
            alt={alt}
            width={24}
            height={24}
            className={invert ? 'dark:invert' : undefined}
          />
        </TooltipTrigger>
        <TooltipContent>{alt}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
