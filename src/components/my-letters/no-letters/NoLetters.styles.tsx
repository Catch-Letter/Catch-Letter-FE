import { colors } from '#/styles/color'
import { css } from '@emotion/react'

export const NoLettersContainer = css`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LettersContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    margin-bottom: 32px;
  }

  h1 {
    color: ${colors.white};
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 12px;
  }

  span {
    text-align: center;
    color: ${colors.grey[7]};
  }
`
