import { css } from '@emotion/react'

const wrapper = css`
  margin: 0 auto;
  max-width: var(--page-width);
  display: grid;
  grid-auto-flow: column;
  grid-gap: 5ch;

  @media (max-width: 800px) {
    padding: 0 1rem;
    grid-auto-flow: row;
  }
`

const profilePic = css`
  border-radius: 50%/10%;
  object-fit: contain;
`

const text = css`
  align-self: center;
  line-height: 1.5;
  font-size: 1.2rem;
`

export { wrapper, profilePic, text }
