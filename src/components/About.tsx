import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui'

export function About(): React.ReactElement {
  return (
    <div className='flex flex-col-reverse items-center justify-center gap-8 sm:flex-row'>
      <Card className='w-[300px]'>
        <CardHeader>
          <CardTitle>Eric Chu</CardTitle>
          <CardDescription>Full-Stack Software Engineer</CardDescription>
        </CardHeader>
        <CardContent className='grid gap-4'>
          <section className='flex items-center justify-between'>
            <span className='text-muted-foreground'>Location</span>
            <span>Chino, California</span>
          </section>
          <section className='flex items-center justify-between'>
            <span className='text-muted-foreground'>Current Title</span>
            <span>
              SWE @{' '}
              <a href='https://www.terros.com/' rel='noreferrer noopener' target='_blank'>
                Terros
              </a>
            </span>
          </section>
        </CardContent>
        <CardFooter className='items-center gap-x-6'>
          <a href='https://github.com/eric-k-chu' rel='noreferrer noopener' target='_blank'>
            <Image
              className='dark:invert'
              src='/github.svg'
              alt='GitHub Logo'
              width={24}
              height={24}
              priority
            />
          </a>
          <a
            href='https://www.linkedin.com/in/eric-k-chu/'
            rel='noreferrer noopener'
            target='_blank'
          >
            <Image src='/linkedin.svg' alt='LinkedIn Logo' width={24} height={24} priority />
          </a>
        </CardFooter>
      </Card>
      <Image
        src='/profile.jpg'
        alt='Eric Chu'
        className='size-72 rounded-full object-cover'
        width={200}
        height={0}
      />
    </div>
  )
}
