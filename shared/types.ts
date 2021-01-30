import type { MdxRemote } from 'next-mdx-remote/types'
import type { Unwrap } from './type-utilities'
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

export type YoutubeVideos = Unwrap<typeof getYoutubeVideos>