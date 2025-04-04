import { css } from '@emotion/react'

export const ChoiceLetterWrapper = css`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const ChoiceLetterStyle = css`
  height: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .content {
    height: 100%;
    min-height: 55%;
    max-height: 100%;
    margin: 16px 63px 34px;
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
      width: 90%;
    }
  }
`
