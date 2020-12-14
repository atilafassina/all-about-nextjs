import { ReactNode } from 'react'
import Header from '@components/header'
import Navigation from '@components/navigation'
import SEO, { SEOProps } from '@components/seo'
import Footer from '@components/footer'

type PageProps = {
  meta?: SEOProps
  children?: ReactNode
}

const Page = ({ meta, children }: PageProps) => (
  <>
    <SEO {...meta} />
    <main>
      <Header />
      <Navigation />
      <div>{children}</div>
      <Footer />
    </main>
  </>
)

export default Page
