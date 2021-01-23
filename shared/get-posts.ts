import { promises as fs, readdirSync } from 'fs'
import path from 'path'
import renderToString from 'next-mdx-remote/render-to-string'
import type { MdxRemote } from 'next-mdx-remote/types'
import matter from 'gray-matter'
import mdxComponents from '@shared/mdx-components'

export type PostFile = {
  filepath: string
  slug: string
}

export type FrontMatter = {
  path: string
  date: string
  title: string
  description: string
}

export type FormattedPost = {
  filepath: string
  slug: string
  content: string
  frontMatter: FrontMatter
  mdx: MdxRemote.Source
}

const getDirData = (source: string): PostFile[] =>
  readdirSync(source).map((name) => ({
    filepath: `${source}/${name}`,
    slug: name.replace(new RegExp(path.extname(name) + '$'), ''),
  }))

const formatPostList = async ({ filepath, slug }: PostFile) => {
  const mdxSource = await fs.readFile(filepath)
  const { content, data } = matter(mdxSource)
  const frontMatter = data as FrontMatter

  const mdx = await renderToString(content, {
    components: mdxComponents,
    scope: frontMatter,
  })

  return {
    filepath,
    slug,
    content,
    frontMatter,
    mdx,
  }
}

export async function getPosts(source: string) {
  const files = getDirData(source)

  if (files.length === 0) return []

  const content = await Promise.all(files.map(formatPostList))

  content.sort((post1, post2) => {
    const dateMs1 = +new Date(post1.frontMatter.date)
    const dateMs2 = +new Date(post2.frontMatter.date)

    return dateMs2 - dateMs1
  })

  return content
}
