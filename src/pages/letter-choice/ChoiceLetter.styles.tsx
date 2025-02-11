import { colors } from '#/styles/color'
import { css } from '@emotion/react'

export const ChoiceLetterStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.grey[13]};
  height: 100%;

  .content {
    padding: 16px 63px 34px;
  }

  .button-area {
    display: flex;
    gap: 12px;
    margin-top: 45px;
  }
`
