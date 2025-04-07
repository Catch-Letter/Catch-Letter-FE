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
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const TryAnswerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

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

    width: 70%;
    height: 70%;
  }

  .Input-wrapper {
    position: relative;
    width: fit-content;
  }

  .Input-length {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 12px;
    color: ${colors.grey[11]};
    pointer-events: none;
  }

  .shake {
    animation: ${shakeAnimation} 0.3s ease-in-out;
  }

  .glowing {
    animation: ${glowAnimation} 2s infinite alternate;
    border-radius: 24px;
  }
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

export const letterCardContainer = css`
  position: relative;
  width: 100%;
  height: 100%;
  perspective: 1000px;
`

export const letterCardStyle = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  transition: transform 0.3s;
  transform-style: preserve-3d;
`

export const frontCardStyle = (backgroundImage: string) => css`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${backgroundImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: white;
  opacity: 0.8;
  border-radius: 24px;
  transform: scaleX(-1);
  transform: rotateY(0deg);
  backface-visibility: hidden;
`

// 뒷면 스타일
export const backCardStyle = css`
  position: absolute;
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotateY(180deg);
`
