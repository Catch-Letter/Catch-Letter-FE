import { colors } from '#/styles/color'
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

export const tryAnswerWrapper = css`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
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
    display: flex;
    justify-content: center;
    /* margin: 0 48px; */
    width: 70%;
    height: 70%;
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
  background-color: white;
  opacity: 0.8;
  background-position: center;
  width: 100%;
  height: 100%;
  border-radius: 24px;
  /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
`

export const SkeletonCardStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 24px;
  background-color: ${colors.grey[3]};
  background-size: 200% 100%;
  opacity: 0.5;
`
