import { ReactNode } from 'react'
import Header from '@components/header'
import Navigation from '@components/navigation'
import SEO from '@components/seo'
import Footer from '@components/footer'
import { FrontMatter } from '@shared/get-posts'

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
    <main>
      <Header />
      <Navigation />
      <article>{children}</article>
      <Footer />
    </main>
  </>
)

export default Post
