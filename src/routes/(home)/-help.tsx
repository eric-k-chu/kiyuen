import { Button, Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components'
import { QuestionMarkCircledIcon } from '@radix-ui/react-icons'
import type { ReactElement } from 'react'

export function Help(): ReactElement {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='ghost' size='icon'>
          <QuestionMarkCircledIcon />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle className='sr-only'>Help</DialogTitle>
        <p className='text-xs'>Click either side of the card to navigate.</p>
        <p className='text-xs'>
          Alternatively, the <CSpan text='←' /> or <CSpan text='h' /> and <CSpan text='→' /> or{' '}
          <CSpan text='l' /> keys can be used for navigation.
        </p>
      </DialogContent>
    </Dialog>
  )
}

type CSpanProps = {
  text: string
}

function CSpan({ text }: CSpanProps): ReactElement {
  return <span className='font-bold text-flamingo text-sm'>{text}</span>
}
