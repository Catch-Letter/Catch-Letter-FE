import { colors } from '#/styles/color'
import { css } from '@emotion/react'

export const ErrorContainer = css`
  width: 100%;
  height: 100dvh;
  background-color: ${colors.grey[11]};
  display: flex;
  flex-direction: column;
`

export const ErrorWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80dvh;

  img {
    margin-bottom: 32px;
  }

  h1 {
    color: ${colors.white};
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 12px;
  }

  p {
    text-align: center;
    color: ${colors.grey[7]};
    margin-bottom: 32px;
  }

  .button-wrapper {
    display: flex;
    gap: 12px;
  }
`
