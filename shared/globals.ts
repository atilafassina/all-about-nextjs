import { css } from '@emotion/react'

export const globalStyles = css`
  :root {
    --page-width: 800px;
    --page-background: rgb(240, 240, 240);
    --page-text: rgb(40, 40, 40);
    --background-accent: rgb(3, 84, 133);
    --color-text-invert: rgb(240, 240, 240);
    --color-accent: rgb(4, 64, 100);
    --reading-width: 60ch;
    --white: #fff;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: var(--page-background);
    color: var(--page-text);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
`
