import fm from 'front-matter'
import { readFile, readdir } from 'node:fs/promises'

type PostMetadata = {
  title: string
  description: string
}

export type Post = PostMetadata & {
  id: string
  body: string
}

/**
 * readdirSync and readFile need to be used in compileTime or else `Module externalized for browser compatibility` error will be thrown because these functions are not available in the browser.
 */
export const posts = compileTime(async () => {
  const listPosts = async (): Promise<string[]> => {
    const posts = await readdir('posts')
    return posts.filter((file) => file.endsWith('.md'))
  }

  const getPost = async (file: string): Promise<Post> => {
    const md = await readFile(`posts/${file}`, 'utf-8')
    const { attributes, body } = fm<PostMetadata>(md)
    return {
      id: file.replace('.md', ''),
      body,
      title: attributes.title,
      description: attributes.description,
    }
  }

  const posts = await listPosts()
  const promises = posts.map(getPost)
  return Promise.all(promises)
})
