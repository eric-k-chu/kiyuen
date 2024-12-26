import { Card } from '@/components'
import type { ReactElement } from 'react'
import Markdown from 'react-markdown'
import { PrismLight } from 'react-syntax-highlighter'
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx'
import ts from 'react-syntax-highlighter/dist/esm/languages/prism/typescript'
import yaml from 'react-syntax-highlighter/dist/esm/languages/prism/yaml'
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism'

PrismLight.registerLanguage('typescript', ts)
PrismLight.registerLanguage('tsx', tsx)
PrismLight.registerLanguage('yaml', yaml)

type Props = {
  body: string
}

export function BlogCard({ body }: Props): ReactElement {
  return (
    <Card className='flex-1 animate-fade-in p-4 rtl:animate-fade-in-rtl'>
      <Markdown
        className='prose dark:prose-invert'
        components={{
          code: (props): ReactElement => {
            const { children, className, ...rest } = props
            const match = /language-(\w+)/.exec(className || '')
            return match ? (
              <PrismLight {...rest} PreTag='div' language={match[1]} style={nightOwl}>
                {String(children).replace(/\n$/, '')}
              </PrismLight>
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            )
          },
        }}
      >
        {body}
      </Markdown>
    </Card>
  )
}
