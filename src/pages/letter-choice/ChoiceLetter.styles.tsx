import { css } from '@emotion/react'

export const ChoiceLetterWrapper = css`
  height: 100%;
`

export const ChoiceLetterStyle = css`
  align-items: center;

  .content {
    padding: 16px 63px 34px;
    box-sizing: border-box;
  }

  .button-area {
    display: flex;
    justify-content: center;
    gap: 12px;
    padding: 16px;
    margin-top: 45px;
  }

  @media (width>= 700px) {
    .content {
      margin: 0 auto;
      width: 60%;
    }
  }
`
