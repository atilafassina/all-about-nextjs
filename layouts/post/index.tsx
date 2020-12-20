import { ReactNode } from 'react'
import { Global } from '@emotion/react'
import { globalStyles } from '@shared/globals'
import Header from '@components/header'
import Navigation from '@components/navigation'
import SEO from '@components/seo'
import Footer from '@components/footer'
import { FrontMatter } from '@shared/get-posts'
import { postStyles, postContainer } from './styles'

type PostProps = {
  children: ReactNode
  frontMatter: FrontMatter
}

const Post = ({ frontMatter, children }: PostProps) => (
  <>
    <SEO
      title={frontMatter.title}
      description={frontMatter.description}
      isBlogPost
    />
    <Global styles={globalStyles} />
    <Header pageTitle={frontMatter.title} />
    <Navigation />
    <main css={postStyles}>
      <article css={postContainer}>{children}</article>
    </main>
    <Footer />
  </>
)

export default Post
