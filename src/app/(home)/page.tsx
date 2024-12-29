import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Hero } from '../hero'
import { SnapSections } from './sections'

export const metadata: Metadata = {
  title: 'kiyuen',
  description: 'Eric Chu Portfolio',
}

export default function Home(): ReactNode {
  return (
    <main className='flex items-center justify-center'>
      <Hero className='hidden sm:grid' />
      <SnapSections />
    </main>
  )
}
