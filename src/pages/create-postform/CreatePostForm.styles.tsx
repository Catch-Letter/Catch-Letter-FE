import { colors } from '#/styles/color'
import { css } from '@emotion/react'

export const CreateFormStyle = css`
  height: 100%;

  .form {
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 343px;

    @media (width >= 768px) {
      width: 60%;
    }
  }

  .btn_submit {
    margin-top: 248px;

    @media (width >= 768px) {
      width: 60%;
    }
  }
`

export const FormWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;

  .notice {
    font-size: 14px;
    color: ${colors.blue[500]};
  }
`
