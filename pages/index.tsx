import { InferGetStaticPropsType } from 'next'
import Page from '@layouts/page'
import { getPosts } from '@shared/get-posts'
import ShortBio from '@components/short-bio'
import PostIndex from '@components/post-index'
import { POSTS_DIR } from 'config'
import { getYoutubeVideos } from '@shared/get-videos'
import YoutubeList from '@components/youtube-list'
const DAY = 60 * 60 * 24

export default function Home({
  posts,
  videos,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Page>
      <ShortBio />
      <PostIndex list={posts} />
      <YoutubeList videos={videos} />
    </Page>
  )
}

export const getStaticProps = async () => {
  const videos = await getYoutubeVideos()
  const posts = await getPosts(POSTS_DIR)

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
