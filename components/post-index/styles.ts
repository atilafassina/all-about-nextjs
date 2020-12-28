import { css } from '@emotion/react'

const indexContainer = css`
  list-style: none;
  margin: 10ch 0 5ch;

  > li + li {
    margin-top: 3ch;
  }
`
const postEntry = css`
  display: flex;
  flex-direction: row;
  margin-left: 5ch;

  :hover svg,
  :focus svg {
    transform: translateY(-25px) translateX(10px) rotate(45deg);
  }
`

const postWrapper = css``
const postBullet = css`
  font-size: 5ch;
  color: var(--color-accent);
  margin-right: 1rem;
  transition: transform 600ms ease-out;
`
const postDate = css`
  display: block;
  width: 100%;
  font-family: monospace;
`
const postTitle = css`
  display: block;
  padding-top: 0.5rem;
  font-size: 3ch;
  font-weight: 100;
  text-decoration: underline var(--color-accent);
  cursor: pointer;

  :hover,
  :focus {
    text-decoration: none;
  }
`

export {
  indexContainer,
  postEntry,
  postWrapper,
  postBullet,
  postDate,
  postTitle,
}
