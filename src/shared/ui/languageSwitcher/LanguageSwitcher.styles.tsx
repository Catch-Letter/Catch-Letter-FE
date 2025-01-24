// import { colors } from '#/styles/color'
import { css } from '@emotion/react'

export const buttonStyle = css`
  background-color: rgba(60, 62, 65, 0.5);
  color: white;
  border: 1px solid #98999b;
  padding: 4px 8px;
  font-size: 14px;
  border-radius: 100px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: gray;
  }
`
