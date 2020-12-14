import Link from 'next/link'
import { GiAstronautHelmet as Astronaut } from 'react-icons/gi'
import { leakedList } from '@shared/style-helpers'

const Navigation = () => (
  <nav css={leakedList}>
    <Link href="/">
      <a aria-label="Back to home">
        <Astronaut />
      </a>
    </Link>
    <Link href="/about">
      <a>about</a>
    </Link>
  </nav>
)

export default Navigation
