import { cva } from 'class-variance-authority'

export const yinYangVariants = cva('h-dvh basis-1/2', {
  variants: {
    variant: {
      default: '',
      center: 'grid place-content-center place-items-center',
      left: 'grid place-content-start place-items-start',
      right: 'grid place-content-end place-items-end',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})
