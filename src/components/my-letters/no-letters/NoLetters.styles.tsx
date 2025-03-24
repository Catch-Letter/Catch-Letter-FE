import { colors } from '#/styles/color'
import { css } from '@emotion/react'

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
    color: ${colors.grey[7]};
  }
`
