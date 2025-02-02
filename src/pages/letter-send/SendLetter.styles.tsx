import { colors } from '#/styles/color'
import { css } from '@emotion/react'

export const SendLetterStyle = css`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  background-color: ${colors.violet[5]};
  text-align: center;

  .button-area {
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-top: 194px;
  }
`
