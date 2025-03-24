import { colors } from '#/styles/color'
import { css, keyframes } from '@emotion/react'

const jump = keyframes`
  0%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-8px);
  }
`

export const LoadingContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  height: 100vh;
`

export const dotWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background-color: ${colors.grey[12]};
  gap: 8px;
`

export const getDotStyle = (delay: number) => css`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${colors.white};
  animation: ${jump} 1.4s infinite ease-in-out;
  animation-delay: ${delay}s;
`

export const infoTextStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  h1 {
    color: ${colors.grey[5]};
    font-size: 24px;
    font-weight: 700;
  }

  span {
    color: ${colors.grey[7]};
  }
`
