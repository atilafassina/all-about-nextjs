import { container, title, postTitle } from './styles'
import Logo from '@components/logo'

type HeaderProps = {
  pageTitle?: string
}

const InternalTitle = ({ pageTitle }: { pageTitle: string }) => (
  <h1 css={postTitle}>{pageTitle}</h1>
)

const Header = ({ pageTitle }: HeaderProps) => (
  <header css={container}>
    {typeof pageTitle !== 'undefined' ? (
      <InternalTitle pageTitle={pageTitle} />
    ) : (
      <>
        <Logo />
        <h1 css={title}>devlog</h1>
      </>
    )}
  </header>
)

export default Header
