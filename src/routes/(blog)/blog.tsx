import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components'
import { Badge } from '@/components/badge'
import { createFileRoute } from '@tanstack/react-router'
import { marked } from 'marked'
import type { ReactElement } from 'react'

export const Route = createFileRoute('/(blog)/blog')({
  component: Blog,
})

function Blog(): ReactElement {
  return (
    <div
      className='prose dark:prose-invert prose-base py-8'
      ref={async (node) => {
        if (!node) return
        const md = await fetch('/blog/sample.md').then((res) => res.text())
        node.innerHTML = await marked(md)
      }}
    />
  )
}

function BlogCard(): ReactElement {
  return (
    <Card className='flex h-96 w-48 flex-col border-border'>
      <CardHeader>
        <CardTitle>Blog</CardTitle>
        <CardDescription>Coming Soon...</CardDescription>
      </CardHeader>
      <CardContent>
        <p className='line-clamp-6 text-xs'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eleifend ac turpis
          vitae hendrerit. Aenean eget risus ultricies, finibus dui id, gravida ex. Nam eget velit
          ut lorem aliquam sollicitudin. Sed pharetra urna quis quam dapibus, ut dapibus leo varius.
          Morbi commodo semper lorem ut vulputate. Nulla egestas felis vel sapien eleifend
          tristique. Aenean maximus neque nulla, ac ultricies ligula vestibulum sit amet. Duis
          dignissim, leo eu vestibulum interdum, ligula ipsum malesuada nunc, vel porta tellus
          turpis vel nibh. In congue ex nec accumsan vulputate. Donec cursus tincidunt vestibulum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ullamcorper, nunc quis
          maximus dictum, est quam lobortis dolor, at tincidunt enim sapien eu nulla.
        </p>
      </CardContent>
      <CardFooter className='mt-auto'>
        <Badge className='bg-flamingo'>Linux</Badge>
      </CardFooter>
    </Card>
  )
}
