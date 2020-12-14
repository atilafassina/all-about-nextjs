import { css } from '@emotion/react'

export const leakedList = css`
  list-style: none;
  width: 90%;
  max-width: var(--page-width);
  margin: 0 auto;
  position: relative;
  top: -3ch;
  padding: 1.5ch 5ch;
  display: flex;
  justify-content: space-between;
  border-radius: 3px;
  font-size: 1.5rem;
  background-color: var(--page-background);

  a:hover,
  a:focus {
    color: var(--color-accent);
  }
`
