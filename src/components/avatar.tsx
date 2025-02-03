'use client'

import { cn } from '@/lib'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import type { ComponentPropsWithRef, ReactElement } from 'react'

interface AvatarProps extends ComponentPropsWithRef<typeof AvatarPrimitive.Root> {}

export function Avatar({ className, ...props }: AvatarProps): ReactElement {
  return (
    <AvatarPrimitive.Root
      className={cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', className)}
      {...props}
    />
  )
}

interface AvatarImageProps extends ComponentPropsWithRef<typeof AvatarPrimitive.Image> {}

export function AvatarImage({ className, ...props }: AvatarImageProps): ReactElement {
  return (
    <AvatarPrimitive.Image className={cn('aspect-square h-full w-full', className)} {...props} />
  )
}

interface AvatarFallbackProps extends ComponentPropsWithRef<typeof AvatarPrimitive.Fallback> {}

export function AvatarFallback({ className, ...props }: AvatarFallbackProps): ReactElement {
  return (
    <AvatarPrimitive.Fallback
      className={cn(
        'flex h-full w-full items-center justify-center rounded-full bg-muted',
        className
      )}
      {...props}
    />
  )
}
