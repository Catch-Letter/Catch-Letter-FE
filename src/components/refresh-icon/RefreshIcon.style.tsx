import { css, keyframes } from '@emotion/react'

const spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

export const SpinStyle = css`
  display: inline-block;
  transform-origin: center;
  will-change: transform;
  animation: ${spin} 1s linear infinite;
`
