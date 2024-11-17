import { CARDS } from '@/config'
import { CarouselProviderContext, useDir, useKeyboard } from '@/lib'
import { type PropsWithChildren, type ReactElement, useState } from 'react'

type CarouselProviderProps = PropsWithChildren

export function CarouselProvider({ children }: CarouselProviderProps): ReactElement {
  const [current, setCurrent] = useState(0)
  const { dir } = useDir()

  const transition = (factor: number): void => {
    setCurrent((p) => (p + factor + CARDS.length) % CARDS.length)
  }

  const next = (): void => transition(dir === 'ltr' ? 1 : -1)

  const prev = (): void => transition(dir === 'ltr' ? -1 : 1)

  useKeyboard(
    (k) => {
      switch (k) {
        case 'l':
        case 'ArrowRight':
          next()
          break
        case 'h':
        case 'ArrowLeft':
          prev()
          break
        default:
          break
      }
    },
    [next, prev]
  )

  return (
    <CarouselProviderContext.Provider value={{ current, next, prev }}>
      {children}
    </CarouselProviderContext.Provider>
  )
}
