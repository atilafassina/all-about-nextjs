import { InferGetStaticPropsType } from 'next'
import Page from '@layouts/page'
import { getPosts } from '@shared/get-posts'
import { getYoutubeVideos } from '@shared/get-videos'
import ShortBio from '@components/short-bio'
import PostIndex from '@components/post-index'
import { POSTS_DIR } from 'config'

const DAY = 60 * 60 * 24

export default function Home({
  posts,
  videos,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(videos)
  return (
    <Page>
      <ShortBio />
      <PostIndex list={posts} />
    </Page>
  )
}

export const getStaticProps = async () => {
  const posts = await getPosts(POSTS_DIR)
  const videos = await getYoutubeVideos()
  const allMdx = posts.map(({ slug, frontMatter }) => ({
    slug,
    frontMatter,
  }))

  return {
    props: {
      posts: allMdx,
      videos,
    },

    revalidate: DAY,
  }
}
