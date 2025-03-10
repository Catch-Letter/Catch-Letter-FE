import { css } from '@emotion/react'
import { keyframes } from '@emotion/react'
import { colors } from '#/styles/color'

const shakeAnimation = keyframes`
  0% { transform: rotate(0deg) translateX(0); }
  25% { transform: rotate(-0.2deg) translateX(-2px); }
  50% { transform: rotate(0.2deg) translateX(2px); }
  75% { transform: rotate(-0.2deg) translateX(-2px); }
  100% { transform: rotate(0deg) translateX(0); }
`

export const MyLettersWrapper = css`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${colors.grey[11]};
`

export const TitleStyle = css`
  font-size: 18px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`

export const BadgeStyle = css`
  text-align: center;
  background-color: ${colors.grey[13]};
  padding: 4px 8px;
  border-radius: 100px;
  font-size: 13px;
  color: ${colors.neonGreen[5]};
`

export const GridContainer = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  padding: 10px 16px;
  overflow-y: auto;
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

  .lock-letter {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    backdrop-filter: blur(1.4px);
    position: relative;
  }
`
