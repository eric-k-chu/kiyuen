---
title: A Personal Blog in React
description: readme file
---

# A Personal Blog in React

With all the devtools and frameworks now, it's very easy to add a blog section to your portfolio site. This particular post will use `Vite`, but it is also possible with `Next.js` and [contentlayer](https://github.com/contentlayerdev/contentlayer).


## Compile Time

There's a relatively new vite plugin called [vite-plugin-compile-time](https://github.com/egoist/vite-plugin-compile-time) by [egoist](https://github.com/egoist). It allows you to run code at compile time and inline the return data. 

## Setting it up

Add the plugin in your `vite.config.ts` file:

```typescript
import compileTime from 'vite-plugin-compile-time'

export default defineConfig({
  plugins: [compileTime()]
})

```

Add a `<filename>.d.ts` next to your `vite-env.d.ts` file.

```typescript
/// <reference types="vite-plugin-compile-time/client" />
```

## Basic Usage

`post.ts`
```typescript
const post = compileTime(async () => readFile('posts/foo', 'utf-8'))
```

`Post.tsx`
```tsx
import { post } from './post'

function Post(): ReactElement {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: post }}
    />
  )
}
```

## Using other markdown libraries

With [react-markdown](https://github.com/markedjs/marked) and [front-matter](https://github.com/jxson/front-matter), you can push this even further:


`foo.md`
```yaml
---
title: Hello World
description: My first program
---

My first program was...

```

`posts.ts`
```typescript
import fm from 'front-matter'
import { marked } from 'marked'

type PostMetadata = {
  title: string
  description: string
}

const post = compileTime(async () => {
  const md = await readFile('posts/foo', 'utf-8')
  const { attributes, body } = fm<PostMetadata>(md)
  return {
    id: 'foo',
    body,
    title: attributes.title,
    description: attributes.description,
  }
})
```

`Post.tsx`
```tsx
import { post } from './post'
import Markdown from 'react-markdown'

function Post(): ReactElement {
  return (
    <div>
      <h1>{post.title}</h1>
      <h2>{post.description}</h2>
      <Markdown className='prose'>
        {post.body}
      </Markdown>
    </div>
  )
}
```

Check out my [portfolio on GitHub](https://github.com/eric-k-chu/kiyuen) for a practical example.
