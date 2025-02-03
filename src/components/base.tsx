import type { PropsWithChildren, ReactElement } from 'react'
import { Footer } from './footer'
import { Nav } from './nav'
import { Socials } from './socials'

type Props = PropsWithChildren

export function Base({ children }: Props): ReactElement {
  return (
    <>
      <Nav />
      <Socials />
      {children}
      <Footer />
    </>
  )
}
