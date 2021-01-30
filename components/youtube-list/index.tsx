import type { YoutubeVideos } from '@shared/types'
import Image from 'next/image'
import { youtubeList, youtubeCard, thumbnail, cardTitle } from './styles'

const VideoCard = ({ id, title, url, image }: YoutubeVideos[number]) => (
  <li key={id} css={youtubeCard}>
    <a href={url} css={cardTitle} target="_blank" rel="noopener noreferrer">
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

const VideoList = ({ videos }: { videos: YoutubeVideos }) => (
  <ul css={youtubeList}>{videos.map(VideoCard)}</ul>
)

export default VideoList
