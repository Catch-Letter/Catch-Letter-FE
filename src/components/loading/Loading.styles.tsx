import { colors } from '#/styles/color'
import { css } from '@emotion/react'

export const LoadingContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  height: 100%;
`

export const infoTextStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  h1 {
    color: ${colors.grey[5]};
    font-size: 24px;
    font-weight: 700;
  }

  span {
    color: ${colors.grey[7]};
  }
`
