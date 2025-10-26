import { css } from '@emotion/react'
import { colors } from '#/styles/color'

export const CanvasWrapper = css`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 24px 16px;
  background: ${colors.white};
  border-radius: 8px;
  backdrop-filter: blur(2px);
`

export const PaletteWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  box-sizing: border-box;
`

export const PaletteStyle = (bgColor: string, isActive: boolean) => {
  const borderWidth = isActive ? 2.6 : 1.6
  const size = 22 + borderWidth * 2

  return css`
    width: ${size}px;
    height: ${size}px;
    background-color: ${bgColor};
    border-radius: 50%;
    border: ${borderWidth}px solid ${isActive ? colors.neonGreen[3] : colors.white};
    cursor: pointer;
    transition: border 0.2s ease-in-out;
  `
}

export const CanvasStageWrapper = css`
  display: flex;
  flex-grow: 1;
  min-height: 0;
`

export const EraserCursor = (x: number, y: number, radius: number) => css`
  position: fixed;
  top: ${y}px;
  left: ${x}px;
  width: ${radius}px;
  height: ${radius}px;
  border-radius: 50%;
  background-color: rgba(128, 128, 128, 0.3);
  border: 1px solid ${colors.grey[10]};
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 1000;
`
