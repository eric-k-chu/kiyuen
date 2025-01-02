import type { ReactElement } from 'react'

export function Footer(): ReactElement {
  const year = new Date().getFullYear()
  return (
    <footer className='fixed bottom-2 left-2 p-4 text-yang/50'>
      <p>
        &copy; <time dateTime={year.toString()}>{year}</time> Eric Chu
      </p>
    </footer>
  )
}
