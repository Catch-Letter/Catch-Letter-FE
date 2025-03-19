import { css, keyframes } from '@emotion/react'

const shakeAnimation = keyframes`
0% { transform: rotate(0deg) translateX(0); }
  25% { transform: rotate(-2deg) translateX(-5px); }
  50% { transform: rotate(2deg) translateX(5px); }
  75% { transform: rotate(-2deg) translateX(-5px); }
  100% { transform: rotate(0deg) translateX(0); }
`

const glowAnimation = keyframes`
  0% {
    box-shadow:
      0 0 10px rgba(255, 255, 255, 0.5),
      0 0 20px rgba(255, 255, 255, 0.3),
      0 0 30px rgba(255, 255, 255, 0.2);
  }
  50% {
    box-shadow:
      0 0 25px rgba(255, 255, 255, 0.9),
      0 0 50px rgba(255, 255, 255, 0.7),
      0 0 75px rgba(255, 255, 255, 0.5);
  }
  100% {
    box-shadow:
      0 0 10px rgba(255, 255, 255, 0.5),
      0 0 20px rgba(255, 255, 255, 0.3),
      0 0 30px rgba(255, 255, 255, 0.2);
  }
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

  .glowing {
    animation: ${glowAnimation} 2s infinite alternate;
    border-radius: 24px;
  }
`
export const LetterCardStyle = (backgroundImage: string) => css`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  width: 300px;
  height: 400px;
  border-radius: 24px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`
