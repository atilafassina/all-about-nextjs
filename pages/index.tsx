import { InferGetStaticPropsType } from 'next'
import Page from '@layouts/page'
import { getPosts } from '@shared/get-posts'
import ShortBio from '@components/short-bio'
import PostIndex from '@components/post-index'
import { POSTS_DIR } from 'config'

const { YOUTUBE_TOKEN, CHANNEL_ID } = process.env
const YOUTUBE_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&key=${YOUTUBE_TOKEN}&type=video&order=date&maxResults=6`
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
  const youtubeResp = await fetch(YOUTUBE_API)
  const videos = await youtubeResp.json()
  const posts = await getPosts(POSTS_DIR)
  const allMdx = posts.map(({ slug, frontMatter }) => ({
    slug,
    frontMatter,
  }))

  return {
    props: {
      posts: allMdx,
      videos
    },

    revalidate: DAY
  }
}
