import { css, keyframes } from '@emotion/react'

const cardMove = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(90px); 
    opacity: 0.8; 
  }
`

export const SendCardStyle = css`
  position: relative;
  width: 320px;
  height: 224px;
  overflow: hidden;

  .card-container {
    position: absolute;
    top: 0;
    left: 25%;
    transform: translateX(-50%);
    animation: ${cardMove} 1s forwards;
  }

  svg {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .svg-1 {
    bottom: 0;
    z-index: 1;

    g {
      mix-blend-mode: plus-lighter;
    }
  }

  .svg-2 {
    bottom: -10px;
    z-index: 2;

    g {
      mix-blend-mode: plus-lighter;
      opacity: 0.6;
    }
  }

  .bar {
    position: absolute;
    bottom: 0;
    left: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 247px;
    height: 4px;
    background-color: white;
    z-index: 3;
  }
`
