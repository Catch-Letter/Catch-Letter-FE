import { colors } from '#/styles/color'
import { css } from '@emotion/react'

export const TabStyle = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;

  ul {
    display: flex;
    gap: 16px;
    align-items: center;
    align-self: stretch;
    justify-content: center;
  }
`
export const TabItem = css`
  color: ${colors.white};
  text-align: center;
  padding: 8px 12px;
  font-size: 18px;
  font-weight: 400;
  cursor: pointer;

  &.active {
    font-weight: 700;
    background: ${colors.grey[11]};
    border-radius: 100px;
  }
`
