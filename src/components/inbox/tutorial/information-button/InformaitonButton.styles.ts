import { colors } from '#/styles/color'
import { css } from '@emotion/react'

const variables = {
  background: colors.white,
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
    color: black;
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

      &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 5%;
        border: ${variables.arrowSize} solid transparent;
        border-bottom-color: ${variables.background};
        border-top: 0;
        margin-left: -${variables.arrowSize};
        margin-top: -${variables.arrowSize};
      }
    }
  }
`
