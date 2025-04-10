import { colors } from '#/styles/color'
import { css } from '@emotion/react'

export const CarouselStyle = css`
  max-width: 48rem;
  width: 100%;
  margin: auto;

  .embla__viewport {
    overflow: hidden;
  }
  .embla__container {
    display: flex;
    gap: 24px;
    height: fit-content;
    touch-action: pan-y pinch-zoom;
    margin: 0 24px;
  }

  // dots
  .embla__controls {
    display: flex;
    justify-content: center;
    gap: 1.2rem;
    margin-top: 1.8rem;
    margin-bottom: 1.8rem;
  }
  .embla__dots {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
    margin-right: calc((2.6rem - 1.4rem) / 2 * -1);
  }
  .embla__dot {
    -webkit-appearance: none;
    appearance: none;
    background-color: transparent;
    touch-action: manipulation;
    text-decoration: none;
    cursor: pointer;
    border: 0;
    padding: 0;
    margin: 0;
    width: 2.4rem;
    height: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  .embla__dot:after {
    box-shadow: inset 0 0 0 0.1rem ${colors.neonGreen[9]};
    width: 1.1rem;
    height: 1.1rem;
    border-radius: 50%;
    content: '';
  }

  .embla__dot--selected:after {
    background-color: ${colors.neonGreen[9]};
  }
`
