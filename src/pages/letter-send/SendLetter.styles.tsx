import { colors } from '#/styles/color'
import { css } from '@emotion/react'

export const sendLetterWrapper = css`
  display: flex;
  flex-direction: column;
  height: 100%;

  .button-area {
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin: 0 auto 20px;
  }
`
export const SendLetterStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  text-align: center;
  margin-bottom: 100px;
  color: ${colors.white};
`
