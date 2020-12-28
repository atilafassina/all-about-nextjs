import { css } from '@emotion/react'

const wrapper = css`
  margin: 0 auto;
  max-width: var(--page-width);
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 5ch;

  @media (max-width: 800px) {
    padding: 0 0.5rem;
  }
`

const profilePic = css`
  border-radius: 50%/10%;
`

const text = css`
  align-self: center;
  line-height: 1.5;
  font-size: 1.2rem;
`

export { wrapper, profilePic, text }
