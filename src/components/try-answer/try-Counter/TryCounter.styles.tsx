import { css } from '@emotion/react'

export const TryCounterStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;

  .Emoji {
    display: flex;
    justify-content: center;
    gap: 12px;
  }

  .Text {
    font-size: 16px;
    margin-top: 10px;
  }

  .correct-message,
  .timer {
    font-size: 32px;
    color: black;
    font-weight: bold;
    margin-bottom: 2px;
  }
`
