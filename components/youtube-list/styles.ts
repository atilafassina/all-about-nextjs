import { css } from '@emotion/react'

export const youtubeList = css`
  padding: 0 1rem;
  margin: 10rem auto 5rem;
  max-width: var(--page-width);
  display: grid;
  list-style: none;
  grid-auto-flow: row;
  grid-gap: 4rem;

  @media (min-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const youtubeCard = css`
  position: relative;
  max-width: 480px;
  display: grid;
  place-items: center;

  :hover,
  :focus {
    color: var(--color-accent);

    img {
      transform: scale(1.1);
    }
  }
`

export const cardTitle = css`
  height: 2.5rem;
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
    left: 0;
    bottom: 0;
    right: 0;
  }
`

export const thumbnail = css`
  width: 100%;
  object-fit: contain;
  border-radius: 10px;
  transition: transform 250ms ease-in-out;
`