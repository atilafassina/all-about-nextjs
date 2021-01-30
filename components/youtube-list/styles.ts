import { css } from '@emotion/react'

export const youtubeList = css`
  margin: 10rem auto 5rem;
  max-width: var(--page-width);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4rem 2rem;
  list-style: none;
`

export const youtubeCard = css`
  position: relative;
  max-width: 480px;
  display: grid;
  align-items: center;

  :hover,
  :focus {
    color: var(--color-accent);

    img {
      transform: scale(1.1);
    }
  }
`

export const cardTitle = css`
  height: 2.5em;
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 0.5rem;
  display: block;
  color: currentColor;

  ::after {
    content: '';
    z-index: 1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`

export const thumbnail = css`
  width: 100%;
  object-fit: contain;
  border-radius: 10px;
  transition: transform 250ms ease-in-out;
`