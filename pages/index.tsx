import { InferGetStaticPropsType } from 'next'
import Page from '@layouts/page'
import { getPosts } from '@shared/get-posts'

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Page>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>{post.slug}</li>
        ))}
      </ul>
    </Page>
  )
}

export const getStaticProps = async () => {
  const posts = await getPosts('./posts')
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
