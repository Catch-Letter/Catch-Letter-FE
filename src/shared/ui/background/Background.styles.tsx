import { css, keyframes } from '@emotion/react'
import { colors } from '#/styles/color'
import { ZIndex } from '#/shared/config'

export const backgroundStyle = (color?: keyof typeof colors) => css`
  position: fixed;
  width: 100%;
  max-width: 768px;
  height: 100vh;
  background: ${getBackgroundColor(color)};
  margin: 0 auto;
  z-index: ${ZIndex.zigzagBackground};
`

export const zigzagLine = (animated: boolean) => css`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  stroke-dasharray: 3000;
  stroke-dashoffset: ${animated ? '3000' : '0'};
  animation: ${animated ? drawZigzag : 'none'} 2.4s forwards;
`

const drawZigzag = keyframes`
  0% {
    stroke-dashoffset: 3000; 
  }
  100% {
    stroke-dashoffset: 0; 
  }
`

const getBackgroundColor = (color?: keyof typeof colors) => {
  switch (color) {
    case 'green':
      return colors.green[6]
    case 'blue':
      return colors.blue[600]
    case 'pink':
      return colors.pink[6]
    case 'violet':
      return colors.violet[6]
    case 'grey':
      return colors.grey[11]
    default:
      return colors.gradients.darkGradient
  }
}
