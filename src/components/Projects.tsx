import { PROJECTS, Project } from '@/common'
import Image from 'next/image'
import { TechTooltip } from './TechTooltip'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui'

export function Projects(): React.ReactElement {
  return (
    <section className='mx-auto flex w-full max-w-4xl items-center justify-center'>
      <div className='grid grid-cols-1 items-center gap-6 sm:grid-cols-2 md:grid-cols-3'>
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard(props: Project): React.ReactElement {
  const { title, desc, tech, repo, live, img } = props
  return (
    <Card className='grid h-[300px] grid-rows-3 overflow-hidden'>
      <CardHeader
        className='justify-center border-t-border bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: `url(${img})`,
          borderImage: 'linear-gradient(hsl(240 100% 20% / 0.5), hsl(0 100% 20% / 0.5)) fill 1',
        }}
      >
        <CardTitle className='text-white'>{title}</CardTitle>
      </CardHeader>
      <CardContent className='space-y-6 pt-6'>
        <em className='text-muted-foreground'>{desc}</em>
        <section className='flex flex-wrap items-center gap-2'>
          {tech.map((t) => (
            <TechTooltip key={t.alt} {...t} size={24} />
          ))}
        </section>
      </CardContent>
      <CardFooter className='items-center gap-x-6 pb-0 pt-6'>
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
