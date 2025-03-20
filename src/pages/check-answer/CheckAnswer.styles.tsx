import { colors } from '#/styles/color'
import { css, keyframes } from '@emotion/react'

const floatingText = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
`
export const CheckAnswerStyles = (isFlipped: boolean, imageUrl: string) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  .content {
    padding: 16px 63px 34px;
    display: grid;
    position: relative;
    transition: transform 0.3s;
    transform: perspective(800px) rotateY(${isFlipped ? '180deg' : '0deg'});
    transform-style: preserve-3d;
    height: 473px;
    cursor: pointer;
  }

  .cardFront,
  .cardBack {
    grid-area: 1 / 1 / 1 / 1;
    width: 400px;
    height: 460px;
    padding: 12px;
    border-radius: 8px;
    backface-visibility: hidden;
  }

  .cardFront {
    /* background-image: url(${imageUrl});
    background-color: transparent; */
  }

  .cardBack {
    /* background-color: ${colors.grey[10]}; */
    transform: rotateY(180deg);
  }

  .notice-area {
    display: flex;
    align-items: center;
    color: pink;
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

export const LetterCardStyle = (backgroundImage: string) => css`
  background-image: url(${backgroundImage});
  background-color: white;
  opacity: 0.8;
  background-size: cover;
  background-position: center;
  width: 400px;
  height: 460px;
  border-radius: 24px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`
