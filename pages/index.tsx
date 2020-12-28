import { InferGetStaticPropsType } from 'next'
import Page from '@layouts/page'
import { getPosts } from '@shared/get-posts'
import ShortBio from '@components/short-bio'
import PostIndex from '@components/post-index'
import { POSTS_DIR } from 'config'

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Page>
      <ShortBio />
      <PostIndex list={posts} />
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
