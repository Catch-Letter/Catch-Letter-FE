import { css, keyframes } from '@emotion/react'
import { colors } from '#/styles/color'

export const jump = keyframes`
  0%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-8px);
  }
`

export const dotStyle = (delay: number, size: number, color: string) => css`
  width: ${size}px;
  height: ${size}px;
  border-radius: 50%;
  background-color: ${color};
  animation: ${jump} 1.4s infinite ease-in-out;
  animation-delay: ${delay}s;
`

export const wrapperStyle = (size: number) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${size * 9}px;
  height: ${size * 9}px;
  border-radius: 50%;
  background-color: ${colors.grey[12]};
  gap: ${size}px;
`
