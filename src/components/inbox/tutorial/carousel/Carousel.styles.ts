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

  .embla__controls {
    display: flex;
    justify-content: space-between;
    gap: 1.2rem;
    margin: 1.8rem 24px;
    margin-right: 0;
  }

  // dots
  .embla__dots {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
    margin-right: calc((2.4rem - 1.1rem) / 2 * -1);
  }
  .embla__dot {
    -webkit-appearance: none;
    appearance: none;
    background-color: transparent;
    touch-action: manipulation;
    text-decoration: none;
    cursor: pointer;
    border: 0;
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

  // arrow
  .embla__buttons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.4rem;
    align-items: center;
  }
  .embla__button {
    -webkit-appearance: none;
    appearance: none;
    background-color: transparent;
    touch-action: manipulation;
    display: inline-flex;
    text-decoration: none;
    cursor: pointer;
    border: 0;
    width: 2.4rem;
    height: 2.4rem;
    color: ${colors.grey[5]};
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 1.2rem;
      height: 1.2rem;
      stroke-width: 20;
    }
  }
  .embla__button:disabled {
    color: ${colors.grey[9]};
    cursor: default;
  }
`
