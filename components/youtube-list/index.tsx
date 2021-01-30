import type { YoutubeVideoList } from '@shared/types'
import Image from 'next/image'
import { youtubeList, youtubeCard, cardTitle, thumbnail } from './styles'

const VideoCard = ({ id, title, url, image }: YoutubeVideoList[number]) => (
  <li key={id} css={youtubeCard}>
    <a
      aria-label={`To ${title} github repository`}
      href={url}
      css={cardTitle}
      target="_blank"
      rel="noopener noreferrer"
    >
      {title}
    </a>
    <Image
      css={thumbnail}
      src={image}
      width="480"
      height="360"
      alt={`Youtube video thumbnail for ${title}`}
    />
  </li>
)

const VideoList = ({ videos }: { videos: YoutubeVideoList }) => (
  <ul css={youtubeList}>{videos.map(VideoCard)}</ul>
)

export default VideoList
