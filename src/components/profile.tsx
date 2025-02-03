import type { ReactElement } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './avatar'

export function Profile(): ReactElement {
  return (
    <Avatar>
      <AvatarImage src='images/avatar.jpeg' alt='avatar' />
      <AvatarFallback>kiyuen</AvatarFallback>
    </Avatar>
  )
}
