import { colors } from '#/styles/color'
import { css } from '@emotion/react'

export const CreateFormStyle = css`
  height: 90%;
  display: flex;
  flex-direction: column;

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
    margin: 0 auto;

    @media (width >= 768px) {
      width: 60%;
    }
  }
`

export const FormWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 200px;
  flex-grow: 1;

  .notice {
    font-size: 14px;
    color: ${colors.blue[500]};
  }
`
