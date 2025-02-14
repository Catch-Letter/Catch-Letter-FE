import { css } from '@emotion/react'

export const TurnCardStyle = css`
  position: relative;
  width: 177px;
  height: 303px;
  transform-style: preserve-3d;
  perspective: 800px;
  animation: rotate-and-separate 4s ease-in-out forwards;

  @keyframes rotate-and-separate {
    0% {
      transform: rotateY(0deg) rotateX(0deg);
    }
    50% {
      transform: rotateY(720deg) rotateX(0deg);
    }
    70% {
      transform: rotateY(720deg) rotateX(20deg);
    }
    100% {
      transform: rotateY(720deg) rotateX(20deg);
    }
  }
`
export const FrontCard = css`
  position: absolute;
  width: 100%;
  height: 100%;
  color: #fff;
  align-items: center;
  justify-content: center;
  padding: 0;
  background: linear-gradient(
    166deg,
    rgba(31, 31, 31, 0.8) 2.99%,
    rgba(49, 74, 107, 0.8) 44.84%,
    rgba(96, 145, 209, 0.8) 102.24%
  );
  transform-origin: center;
  animation: front-card-move 4s ease-in-out forwards;

  @keyframes front-card-move {
    0% {
      transform: translateZ(0);
    }
    50% {
      transform: translateZ(0);
    }
    70% {
      transform: translateZ(20px) translateY(30px) translateX(-30px) rotateZ(-10deg);
    }
    100% {
      transform: translateZ(20px) translateY(30px) translateX(-50px) rotateZ(-10deg);
    }
  }

  .top {
    font-weight: 700;
  }

  .bottom {
    font-weight: 400;
  }
`
export const BackCard = css`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #d9d9d9;
  padding: 0;
  backface-visibility: hidden;
  animation: back-card-move 4s ease-in-out forwards;

  @keyframes back-card-move {
    0% {
      transform: translateZ(0);
    }
    50% {
      transform: translateZ(0);
    }
    70% {
      transform: translateZ(-20px) translateY(-20px) translateX(40px) rotateZ(10deg);
    }
    100% {
      transform: translateZ(-20px) translateY(-20px) translateX(60px) rotateZ(10deg);
    }
  }
`
