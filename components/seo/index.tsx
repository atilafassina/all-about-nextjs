import Head from 'next/head'
import { metadata as siteMeta } from 'config'

export type SEOProps = {
  title?: string
  description?: string
}

const SEO = ({ title, description }: SEOProps) => {
  const pageTitle = title
    ? `${title} :: ${siteMeta.siteName}`
    : siteMeta.siteName
  const pageDescription = description ? description : siteMeta.description

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta property="twitter:card" content="app" />
      <meta property="twitter:site" content={siteMeta.author.twitter} />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={pageDescription} />
    </Head>
  )
}

export default SEO
