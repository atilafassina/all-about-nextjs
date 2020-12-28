import { ReactNode } from 'react'
import Header from '@components/header'
import Navigation from '@components/navigation'
import SEO, { SEOProps } from '@components/seo'
import Footer from '@components/footer'
import { wrapper } from './styles'

type PageProps = {
  meta?: SEOProps
  children?: ReactNode
}

const Page = ({ meta, children }: PageProps) => (
  <>
    <SEO {...meta} />
    <main css={wrapper}>
      <Header />
      <Navigation />
      <article>{children}</article>
      <Footer />
    </main>
  </>
)

export default Page
