import { css, keyframes } from '@emotion/react'

const shakeAnimation = keyframes`
0% { transform: rotate(0deg) translateX(0); }
  25% { transform: rotate(-2deg) translateX(-5px); }
  50% { transform: rotate(2deg) translateX(5px); }
  75% { transform: rotate(-2deg) translateX(-5px); }
  100% { transform: rotate(0deg) translateX(0); }
`

export const TryAnswerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  .Input-area {
    margin-top: 16px;
  }

  .button-area {
    display: flex;
    margin-top: 20px;
  }

  .LetterCard-container {
    margin: 0 48px;
  }

  .shake {
    animation: ${shakeAnimation} 0.3s ease-in-out;
  }
`
