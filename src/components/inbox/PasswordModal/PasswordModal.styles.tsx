import { colors } from '#/styles/color'
import { css } from '@emotion/react'

export const passwordModalStyles = css`
  width: 290px;
  height: 300px;
  padding: 34px 37px;
  border: 1px solid ${colors.grey[8]};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
  border-radius: 8px;
  background: ${colors.grey[13]};
  box-sizing: border-box;

  label {
    color: ${colors.grey[1]};
    text-align: center;
    font-size: 18px;
    font-weight: 700;
  }

  button {
    margin-top: 32px;
  }
`
