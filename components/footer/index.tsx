import { IoLogoGithub as Github } from 'react-icons/io'
import { FiTwitter as Twitter } from 'react-icons/fi'
import { SiUdemy as Udemy } from 'react-icons/si'
import { metadata } from 'config'
import { leakedList } from '@shared/style-helpers'
import Footprint from '@components/footprint'
import { footer } from './styles'

const Footer = () => (
  <footer css={footer}>
    <ul css={leakedList}>
      <li>
        <a
          aria-label="To Atila Fassina's github profile"
          href={metadata.author.githubUrl}
          target="_blank"
          rel="noopener"
        >
          <Github />
        </a>
      </li>
      <li>
        <a
          aria-label="To Atila Fassina's twitter profile"
          href={metadata.author.twitterUrl}
          target="_blank"
          rel="noopener"
        >
          <Twitter />
        </a>
      </li>
      <li>
        <a
          aria-label="To this course's Udemy page"
          href={metadata.author.udemyUrl}
          target="_blank"
          rel="noopener"
        >
          <Udemy />
        </a>
      </li>
    </ul>
    <Footprint />
  </footer>
)

export default Footer
