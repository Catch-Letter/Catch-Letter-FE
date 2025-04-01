import { css } from '@emotion/react'
import { colors } from '#/styles/color'

export const ToolWrapper = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const IconWrapper = css`
  display: flex;
  gap: 8px;

  .icon {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${colors.grey[12]};
    background-color: ${colors.grey[4]};
    border: 2px solid ${colors.grey[7]};
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      background-color: ${colors.white};
    }

    &.active {
      border: 3px solid #ccff1b;
      background-color: ${colors.white};
      transition: border 0.2s ease-in-out;
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }
`
