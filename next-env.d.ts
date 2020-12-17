/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="@emotion/react/types/css-prop" />

type RenderToStringParams = {
  components?: object
  mdxOptions?: object
  scope?: object
}

type HydrateParams = {
  components?: object
}

declare module 'next-mdx-remote/render-to-string' {
  function renderToString(
    source: string,
    renderToStringParams?: RenderToStringParams
  ): object

  export default renderToString
}

declare module 'next-mdx-remote/hydrate' {
  function hydrate(mdxObject: object, components?: HydrateParams): string

  export default hydrate
}
