import { colors } from '#/styles/color'
import { css } from '@emotion/react'

export const ChoiceLetterStyle = css`
  display: flex;
  flex-direction: column;
  background-color: ${colors.grey[13]};
  height: 100vh;

  .content {
    padding: 16px 63px 34px;
  }
`
