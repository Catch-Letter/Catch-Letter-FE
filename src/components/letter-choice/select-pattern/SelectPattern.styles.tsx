import { colors } from '#/styles/color'
import { css } from '@emotion/react'

export const SelectPatternStyle = css`
  display: flex;
  flex-direction: column;
  width: 100%;

  ul {
    display: flex;
    gap: 30px;
    align-items: center;
    justify-content: center;
    align-self: stretch;
  }
`
export const PatternStyle = css`
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  align-items: center;

  &.active {
    border: 1.5px solid ${colors.neonGreen[5]};
  }
`
