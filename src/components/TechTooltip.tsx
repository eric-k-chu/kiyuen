import { Tech, cn } from '@/common'
import Image from 'next/image'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui'

type Props = Tech & {
  size?: number
  className?: string
}

export function TechTooltip({ src, alt, invert, size = 24, className }: Props): React.ReactElement {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Image
            src={src}
            alt={alt}
            width={size}
            height={size}
            className={cn('scale-75 sm:scale-100', invert && 'dark:invert', className)}
          />
        </TooltipTrigger>
        <TooltipContent>{alt}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
