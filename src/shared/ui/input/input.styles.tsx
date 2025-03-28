import { colors } from '#/styles/color'
import { css } from '@emotion/react'

export const inputStyles = css`
  width: 100%;
  height: 40px;
  padding: 14px;
  border: 1.5px solid transparent;
  border-radius: 8px;
  box-sizing: border-box;
  flex-shrink: 0;

  //font
  color: ${colors.grey[13]};
  font-size: 18px;
  font-weight: 500;

  &::placeholder {
    color: ${colors.grey[7]};
    font-size: 16px;
  }

  &:focus {
    caret-color: ${colors.neonGreen[6]};
    outline: none;
  }

  &[aria-invalid='true'] {
    border-color: ${colors.error};
  }
`
