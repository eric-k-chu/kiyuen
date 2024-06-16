import { cn } from '@/common'
import { TechIcon, Technology, buildTechIcon } from '@/model'
import Image from 'next/image'
import { ReactElement } from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui'

type Props = Pick<TechIcon, 'alt' | 'invert'> & {
  tech: Technology
  size?: number
  className?: string
}

export function TechTooltip({ tech, alt, invert, size = 24, className }: Props): ReactElement {
  const icon = buildTechIcon({ tech, alt, invert })

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Image
            src={icon.src}
            alt={icon.alt || tech}
            width={size}
            height={size}
            className={cn('scale-75 sm:scale-100', icon.invert && 'dark:invert', className)}
          />
        </TooltipTrigger>
        <TooltipContent>{icon.alt}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
