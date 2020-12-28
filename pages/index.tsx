import { InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import Page from '@layouts/page'
import { getPosts } from '@shared/get-posts'
import ShortBio from '@components/short-bio'
import { POSTS_DIR } from 'config'

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Page>
      <ShortBio />
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/${post.slug}`}>
              <a>{post.frontMatter.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Page>
  )
}

export const getStaticProps = async () => {
  const posts = await getPosts(POSTS_DIR)
  const allMdx = posts.map(({ slug, frontMatter }) => ({
    slug,
    frontMatter,
  }))
  return {
    props: {
      posts: allMdx,
    },
  }
}
