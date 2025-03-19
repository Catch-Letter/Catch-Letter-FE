import { colors } from '#/styles/color'
import { css } from '@emotion/react'

export const sendLetterWrapper = css`
  display: flex;
  flex-direction: column;
  height: 90%;

  .button-area {
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin: 0 auto;
  }
`
export const SendLetterStyle = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
  flex-grow: 1;
  text-align: center;
  color: ${colors.white};
`
