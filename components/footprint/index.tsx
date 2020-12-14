import { MdCopyright as Copyright } from 'react-icons/md'
import { note, copyrightIcon } from './styles'
import Atila from './atila-logo'

const Footprint = () => (
  <>
    <Atila />
    <small css={note}>
      <Copyright css={copyrightIcon} /> Atila Fassina - 2020
    </small>
  </>
)

export default Footprint
