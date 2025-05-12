import { colors } from '#/styles/color'
import { css, keyframes } from '@emotion/react'

const shake = keyframes`
  0% { transform: rotateZ(0deg); }
  5% { transform: rotateZ(-8deg); }
  10% { transform: rotateZ(8deg); }
  15% { transform: rotateZ(-8deg); }
  20% { transform: rotateZ(8deg); }
  25% { transform: rotateZ(0deg); }
  100% { transform: rotateZ(0deg); }
`

export const EventButtonWrapper = css`
  background-color: inherit;
  border: none;
  cursor: pointer;
  animation: ${shake} 2.7s ease-in-out infinite;
  transform-origin: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.neonGreen[3]};
  font-family: Ownglyph;
  font-size: 20px;
`
