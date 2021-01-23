import type { FrontMatter } from '@shared/types'
import Link from 'next/link'
import { AiOutlineRocket as Rocket } from 'react-icons/ai'
import {
  indexContainer,
  postEntry,
  postWrapper,
  postBullet,
  postDate,
  postTitle,
} from './styles'

type Post = {
  slug: string
  frontMatter: FrontMatter
}
type PostIndexProps = {
  list: Post[]
}

const IndexItem = ({ slug, frontMatter }: Post) => (
  <li css={postEntry} key={slug}>
    <Rocket css={postBullet} role="img" aria-hidden />
    <Link href={`/${slug}`}>
      <a css={postWrapper}>
        <time css={postDate} dateTime={frontMatter.date}>
          {frontMatter.date}
        </time>
        <strong css={postTitle}>{frontMatter.title}</strong>
      </a>
    </Link>
  </li>
)

const PostIndex = ({ list }: PostIndexProps) => (
  <ul css={indexContainer}>{list.map(IndexItem)}</ul>
)

export default PostIndex
