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
    height: fit-content;
    touch-action: pan-y pinch-zoom;
    margin-left: calc(var(--slide-spacing, 1rem) * -1);
  }
  .embla__slide {
    height: fit-content;
    transform: translate3d(0, 0, 0);
    flex: 0 0 var(--slide-size, 90%);
    min-width: 0;
    padding-left: var(--slide-spacing, 1rem);
  }
  .embla__slide__number {
    /* box-shadow: inset 0 0 0 0.2rem var(--detail-medium-contrast); */
    /* border-radius: 1.8rem; */
    border: 1px solid yellow;
    color: white;
    font-size: 4rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    height: var(--slide-height, 19rem);
    user-select: none;
  }
  // dots
  .embla__controls {
    display: flex;
    justify-content: center;
    gap: 1.2rem;
    margin-top: 1.8rem;
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
    width: 2.6rem;
    height: 2.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  .embla__dot:after {
    box-shadow: inset 0 0 0 0.1rem ${colors.neonGreen[10]};
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    content: '';
  }
  .embla__dot--selected:after {
    background-color: ${colors.neonGreen[10]};
  }
`
