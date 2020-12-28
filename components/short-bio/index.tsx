import Image from 'next/image'
import { wrapper, profilePic, text } from './styles'

const ShortBio = () => (
  <section css={wrapper}>
    <Image css={profilePic} src="/peter-quill.jpg" width={225} height={300} />
    <p css={text}>
      Peter Jason Quill is a member of the NASA space program for extended
      universe research. He has also affiliated himself with a number of other
      interplanetery groups, such as: NOVA Corps, Infitinity Watch, and the
      Guardians of the Galaxy. He is an expert pilot and strategist, son of a
      Celestial and a human from Missouri. Recently he has helped the Avengers
      in the Infinity War, saving half of the universe.
    </p>
  </section>
)

export default ShortBio
