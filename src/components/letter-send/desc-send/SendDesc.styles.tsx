import { css } from '@emotion/react'

export const SendDescStyle = css`
  width: 100%;

  .title {
    font-weight: 700;
    font-size: 18px;

    @media (width >= 768px) {
      font-weight: 800;
      font-size: 24px;
    }
  }

  .sub-title {
    font-size: 14px;
    margin-bottom: 75px;

    @media (width >= 768px) {
      margin-top: 8px;
      font-size: 18px;
    }
  }
`
