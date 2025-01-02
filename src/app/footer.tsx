import type { ReactElement } from 'react'

export function Footer(): ReactElement {
  const year = new Date().getFullYear()
  return (
    <footer className='p-4'>
      <p className='text-center text-xs'>
        &copy; <time dateTime={year.toString()}>{year}</time> Eric Chu
      </p>
    </footer>
  )
}
