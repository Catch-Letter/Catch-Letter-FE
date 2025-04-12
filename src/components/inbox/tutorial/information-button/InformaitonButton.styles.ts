import { colors } from '#/styles/color'
import { css } from '@emotion/react'

const variables = {
  background: 'rgba(54, 54, 54, 0.86)',
  color: colors.grey[3],
  arrowSize: '10px',
}

export const informationButtonStyles = css`
  -webkit-appearance: none;
  appearance: none;
  background-color: transparent;
  touch-action: manipulation;
  cursor: pointer;
  border: 0;
  padding: 0;
  width: 18px;
  height: 18px;
  color: ${colors.grey[1]};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  > svg {
    width: 100%;
    height: 100%;
  }

  .help {
    color: white;
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(5%, calc(100% + 24px));

    .bubble {
      position: relative;
      background: ${variables.background};
      border-radius: 6px;
      padding: 4px 8px;
      text-align: start;
      white-space: pre;
      font-size: 12px;
      font-weight: 400;
      border: solid 1px ${colors.neonGreen[5]};

      &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 5%;
        transform: translateY(-100%);
        border-width: 10px;
        border-style: solid;
        border-color: transparent transparent ${colors.neonGreen[5]} transparent;
        z-index: 1;
      }

      &::before {
        content: '';
        position: absolute;
        top: 1px;
        right: 5%;
        transform: translateY(-100%);
        border-width: 10px;
        border-style: solid;
        border-color: transparent transparent rgba(54, 54, 54) transparent;
        z-index: 2;
      }
    }
  }
`
