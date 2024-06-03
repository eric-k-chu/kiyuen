import { PROJECTS, Project } from '@/common'
import Image from 'next/image'
import { TechTooltip } from './TechTooltip'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui'

export function Projects(): React.ReactElement {
  return (
    <section className='mx-auto flex w-full max-w-4xl items-center justify-center'>
      <div className='grid grid-cols-1 items-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard(props: Project): React.ReactElement {
  const { title, desc, tech, repo, live } = props
  return (
    <Card className='flex h-[300px] flex-col'>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
      <CardContent>
        <section className='flex flex-wrap items-center gap-2'>
          {tech.map((t) => (
            <TechTooltip key={t.alt} {...t} />
          ))}
        </section>
      </CardContent>
      <CardFooter className='mt-auto items-center gap-x-6'>
        <a href={repo} rel='noreferrer noopener' target='_blank'>
          <Image
            className='dark:invert'
            src='/github.svg'
            alt='GitHub Logo'
            width={20}
            height={20}
            priority
          />
        </a>
        {live && (
          <a href={live} rel='noreferrer noopener' target='_blank'>
            <Image
              src='/link.svg'
              alt={`${title} live site`}
              width={20}
              height={20}
              priority
              className='dark:invert'
            />
          </a>
        )}
      </CardFooter>
    </Card>
  )
}
