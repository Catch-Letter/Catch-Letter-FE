import { colors } from '#/styles/color'
import { css, keyframes } from '@emotion/react'

const floatingText = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
`

export const checkAnswerWrapper = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const CheckAnswerStyles = (isFlipped: boolean) => css`
  display: flex;
  flex-direction: column;
  align-items: center;

  .content {
    flex-basis: 70%;
    min-width: 70%;
    min-height: 64vh;
    margin: 16px 63px 34px;
    box-sizing: border-box;
    position: relative;
    transition: transform 0.3s;
    transform: rotateY(${isFlipped ? '180deg' : '0deg'});
    transform-style: preserve-3d;
    perspective: 800px;
    cursor: pointer;
  }

  .cardFront,
  .cardBack {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .cardFront {
    transform: rotateY(0deg);
  }

  .cardBack {
    transform: rotateY(180deg);
    backface-visibility: hidden;
  }

  .notice-area {
    display: flex;
    align-items: center;
    color: ${colors.neonGreen[3]};
    gap: 4px;
    font-size: 16px;
    margin-top: 16px;
    animation: ${floatingText} 2s ease-in-out infinite;
  }

  .btn-copy {
    display: flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    background: #000;
    color: ${colors.neonGreen[6]};
    font-size: 13px;
    border: none;
    margin-bottom: 12px;
  }
`

export const SkeletonCardStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 16px;
  left: 63px;
  margin: 0 auto;
  width: 100%;
  min-height: 64vh;
  border-radius: 24px;
  background-color: ${colors.grey[3]};
  background-size: 200% 100%;
  opacity: 0.5;
`
