import { colors } from '#/styles/color'
import { css } from '@emotion/react'

// label
export const labelStyles = css`
  display: block;
  margin-bottom: 12px;
  color: ${colors.grey[1]};
  font-size: 18px;
  font-weight: 700;
`

export const labelValidStyles = css`
  ${labelStyles};
  color: ${colors.success};
`

export const labelInvalidStyles = css`
  ${labelStyles};
  color: ${colors.error};
`

// help message
export const helpMessageStyles = css`
  display: block;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 500;
  color: ${colors.grey[7]};
`

export const helpMessageValidStyles = css`
  ${helpMessageStyles};
  color: ${colors.success};
`

export const helpMessageInalidStyles = css`
  ${helpMessageStyles};
  color: ${colors.error};
`
