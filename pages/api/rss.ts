import type { NowRequest, NowResponse } from '@vercel/node'
import { METADATA } from 'config'
import { FormattedPost, getPosts } from '@shared/get-posts'
const RSS = require('rss')

const POSTS_PATH = `${process.cwd()}/posts`

const FEED_DATA = {
  title: METADATA.siteName,
  site_url: METADATA.siteUrl,
  image_url: `${METADATA.siteUrl}/images/logo.jpg`,
  managingEditor: METADATA.rssEmail,
  webMaster: METADATA.rssEmail,
  copyright: `2020 - ${METADATA.author.name}`,
  categories: METADATA.keywords,
  pubDate: new Date(),
  ttl: '60',
}

const addFeedItems = (feed: any, posts: FormattedPost[]) => {
  posts.forEach(({ frontMatter, mdx }) => {
    feed.item({
      title: frontMatter.title,
      date: frontMatter.date,
      description: frontMatter.description,
      guid: `${METADATA.siteUrl}/${frontMatter.path}`,
      url: `${METADATA.siteUrl}/${frontMatter.path}`,
      categories: [],
      custom_elements: [
        {
          'content:encoded': mdx.renderedOutput,
        },
      ],
    })
  })

  return feed
}

export default async (req: NowRequest, res: NowResponse) => {
  const mdx = await getPosts(POSTS_PATH)

  res.statusCode = 200
  res.setHeader('Content-type', 'text/xml')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate')

  const feed = new RSS({
    ...FEED_DATA,
    feed_url: `${METADATA.siteUrl}/rss`,
    language: 'en',
    description: METADATA.description
  })

  res.send(addFeedItems(feed, mdx).xml())
}
