import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui'

type Tech = {
  src: string
  alt: string
  invert?: boolean
}

const techs: Tech[] = [
  { src: '/nextdotjs.svg', alt: 'Next.js', invert: true },
  { src: '/react.svg', alt: 'React' },
  { src: '/sst.svg', alt: 'SST' },
  { src: '/vercel.svg', alt: 'Vercel', invert: true },
  { src: '/awslambda.svg', alt: 'AWS Lambda' },
  { src: '/amazondynamodb.svg', alt: 'AWS DynamoDb' },
  { src: '/postgresql.svg', alt: 'PostgreSQL' },
  { src: '/typescript.svg', alt: 'TypeScript' },
  { src: '/javascript.svg', alt: 'JavaScript' },
  { src: '/nodejs.svg', alt: 'Node.js' },
  { src: '/turborepo.svg', alt: 'Turborepo' },
  { src: '/vite.svg', alt: 'Vite' },
  { src: '/git.svg', alt: 'Git' },
  { src: '/tailwindcss.svg', alt: 'Tailwind CSS' },
]

export function About(): React.ReactElement {
  return (
    <div
      id='#about'
      className='grid grid-cols-1 items-center justify-items-center gap-8 sm:grid-cols-2'
    >
      <Card className='order-last w-[300px] sm:order-first'>
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

function TechTooltip({ tech }: { tech: Tech }): React.ReactElement {
  const { src, alt, invert } = tech
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Image
            src={src}
            alt={alt}
            width={24}
            height={24}
            className={invert ? 'dark:invert' : undefined}
          />
        </TooltipTrigger>
        <TooltipContent>{alt}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
