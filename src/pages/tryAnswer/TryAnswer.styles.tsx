import { css, keyframes } from '@emotion/react'

const shakeAnimation = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
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

  .shake {
    animation: ${shakeAnimation} 0.5s ease-in-out;
  }
`
