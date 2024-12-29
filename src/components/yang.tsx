import { cn } from '@/lib'
import type { VariantProps } from 'class-variance-authority'
import type { ComponentProps, PropsWithChildren, ReactElement } from 'react'
import { yinYangVariants } from './variants'

type Props = PropsWithChildren<ComponentProps<'section'>> & VariantProps<typeof yinYangVariants>

export function Yang({ className, children, variant, ...props }: Props): ReactElement {
  return (
    <section className={cn(yinYangVariants({ variant, className }), 'bg-yang text-yin')} {...props}>
      {children}
    </section>
  )
}
