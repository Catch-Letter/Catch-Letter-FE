import { colors } from '#/styles/color'
import { css } from '@emotion/react'

export const CreateFormStyle = css`
  height: 100%;

  .form {
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 343px;
    margin-bottom: 282px;
  }
`

export const FormWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 55px;

  .notice {
    font-size: 14px;
    color: ${colors.blue[500]};
  }
`
