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

export const SkeletonCardStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  aspect-ratio: 2 / 3;
  border-radius: 16px;
  background-color: ${colors.grey[12]};
  background-size: 200% 100%;
`

export const NoLettersContainer = css`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LockLetterStyle = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 16px;
  gap: 12px;
  backdrop-filter: blur(1.2px);

  .lock-text {
    line-height: 140%;
    text-align: center;
    color: ${colors.grey[5]};
  }
`

export const UnLockLetterStyle = (backgroundImage: string) => css`
  width: 100%;
  height: 100%;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
