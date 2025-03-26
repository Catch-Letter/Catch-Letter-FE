import { css, keyframes } from '@emotion/react'
import { colors } from '#/styles/color'

const shakeAnimation = keyframes`
  0% { transform: rotate(0deg) translateX(0); }
  25% { transform: rotate(-0.2deg) translateX(-2px); }
  50% { transform: rotate(0.2deg) translateX(2px); }
  75% { transform: rotate(-0.2deg) translateX(-2px); }
  100% { transform: rotate(0deg) translateX(0); }
`

export const LetterCardStyle = (
  shakingCard: number | null,
  letterId: number,
  backgroundColor: string,
  backgroundImage: string
) => css`
  width: 100%;
  aspect-ratio: 2 / 3;
  background-color: ${colors.pink[1]};
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${backgroundColor};
  border: 1px solid ${backgroundColor};
  background-image: url(${backgroundImage});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;

  ${shakingCard !== null &&
  shakingCard === letterId &&
  css`
    animation: ${shakeAnimation} 0.5s ease-in-out;
  `}
`
