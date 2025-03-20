import { css } from '@emotion/react'

export const ChoiceLetterWrapper = css`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const ChoiceLetterStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;

  .content {
    flex-grow: 1;
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
      width: 70%;
    }
  }
`
