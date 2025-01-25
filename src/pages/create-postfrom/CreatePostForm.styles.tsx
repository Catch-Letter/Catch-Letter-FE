import { colors } from '#/styles/color'
import { css } from '@emotion/react'

export const CreateFormStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.grey[13]};
  height: 100vh;

  .form {
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 343px;
    margin-bottom: 330px;
  }
`
