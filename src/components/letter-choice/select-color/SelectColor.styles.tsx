import { colors } from '#/styles/color'
import { css } from '@emotion/react'

export const backgroundColors = {
  violet: colors.violet[4],
  blue: colors.blue[400],
  pink: colors.pink[5],
  green: colors.green[4],
  grey: colors.grey[4],
}

export const SelectColorStyle = css`
  display: flex;
  flex-direction: column;
  width: 100%;

  ul {
    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: center;
    align-self: stretch;
  }
`
export const ColorStyle = (color: keyof typeof backgroundColors) => css`
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  align-items: center;
  background-color: ${backgroundColors[color]};

  &.active {
    border: 1.5px solid ${colors.neonGreen[5]};
  }
`
