import type { UnwrapPromise } from './type-utilities'
import type { MdxRemote } from 'next-mdx-remote/types'
import { getYoutubeVideos } from './get-videos'

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

type YoutubeVideo = {
  id: {
    videoId: string
  }
  snippet: {
    title: string
    thumbnails: {
      high: {
        url: string
      }
    }
  }
}

export type YoutubeChannel = {
  kind: string
  etag: string
  nextPageToken: string
  regionCode: string
  pageInfo: {
    totalResults: number
    resultsPerPage: number
  }
  items: YoutubeVideo[]
}

export type YoutubeVideoList = UnwrapPromise<typeof getYoutubeVideos>
