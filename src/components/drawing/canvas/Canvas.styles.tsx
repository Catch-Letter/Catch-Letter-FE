import { colors } from '#/styles/color'
import { css } from '@emotion/react'

export const CanvasStyle = css`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 24px 16px;
  background: rgba(230, 230, 230, 0.7);
  border-radius: 8px;
  backdrop-filter: blur(2px);
`

export const PaletteWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
`

export const PaletteStyle = (bgColor: string, selectedColor: string) => css`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${bgColor};
  border: ${selectedColor === bgColor ? '3px solid #CCFF1B' : `1.5px solid ${colors.white}`};
  cursor: pointer;
  transition: border 0.2s ease-in-out;
`

export const ToolWrapper = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const IconWrapper = css`
  display: flex;
  gap: 8px;

  .icon {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${colors.grey[12]};
    background-color: ${colors.grey[4]};
    border: 2px solid ${colors.grey[7]};
    border-radius: 50%;
  }
`
