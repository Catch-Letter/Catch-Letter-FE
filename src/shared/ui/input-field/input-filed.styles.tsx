import { colors } from '#/styles/color'
import { css } from '@emotion/react'

export const initialStyles = css`
  .input-field-label {
    display: block;
    margin-bottom: 12px;
    color: ${colors.grey[1]};
    font-size: 18px;
    font-weight: 700;
  }

  .input-field-help-message {
    display: block;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 500;
    color: ${colors.grey[7]};
  }
`

export const validStyles = css`
  ${initialStyles}

  .input-field-help-message {
    color: ${colors.success};
  }
`

export const invalidStyles = css`
  ${initialStyles}

  .input-field-help-message {
    color: ${colors.error};
  }
`
