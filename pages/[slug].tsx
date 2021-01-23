import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next'
import type { FormattedPost, PostFile } from '@shared/types'
import { getPosts } from '@shared/get-posts'
import hydrate from 'next-mdx-remote/hydrate'
import PostLayout from '@layouts/post'
import { POSTS_DIR } from 'config'
import mdxComponents from '@shared/mdx-components'

export default function Post({
  mdxContent,
  frontMatter,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const content = hydrate(mdxContent, { components: mdxComponents })

  return <PostLayout frontMatter={frontMatter}>{content}</PostLayout>
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts(POSTS_DIR)

  const paths = posts.map(({ slug }) => ({
    params: {
      slug,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const { slug } = params as { slug: string }
  const posts: PostFile[] = await getPosts(POSTS_DIR)

  const { mdx, frontMatter } = posts.find(
    ({ slug: routeSlug }) => routeSlug === slug
  ) as FormattedPost

  return {
    props: {
      mdxContent: mdx,
      frontMatter,
    },
  }
}
