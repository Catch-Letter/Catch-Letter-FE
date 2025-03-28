import { colors } from '#/styles/color'
import { css } from '@emotion/react'

export const SelectPatternStyle = css`
  display: flex;
  flex-direction: column;
  width: 100%;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: stretch;
    gap: 30px;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
    }
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
