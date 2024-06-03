import { LINKS, cn } from '@/common'
import { Button, useCarousel } from './ui'

export function NavIndicators(): React.ReactElement {
  const { current, scrollTo } = useCarousel()
  return (
    <div className='fixed bottom-4 z-10 flex w-screen items-center justify-center'>
      {LINKS.map((_, index) => {
        const className = current === index ? 'bg-gray-400' : 'bg-gray-300'
        return (
          <Button
            key={index}
            variant='ghost'
            size='icon'
            onClick={() => scrollTo(index)}
            reader={`To Slide ${index + 1}`}
          >
            <div className={cn('size-3 rounded-full transition-colors ease-in-out', className)} />
          </Button>
        )
      })}
    </div>
  )
}
