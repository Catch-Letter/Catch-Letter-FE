import { ZIndex } from '#/shared/config'
import { colors } from '#/styles/color'
import { css } from '@emotion/react'

export const containerStyles = css`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: transparent;
  z-index: ${ZIndex.fallingLetter};
  overflow-y: hidden;
  background: ${colors.gradients.darkGradient};
`

export const headerStyles = css`
  z-index: ${ZIndex.letterInboxUI};

  .left {
    font-size: 24px;
    font-weight: 700;
    margin-left: 6px;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      padding-top: 4px;
      margin-left: 8px;
    }
  }
`

export const buttonGroupStyles = css`
  position: absolute;
  z-index: ${ZIndex.letterInboxUI};
  left: 16px;
  right: 16px;
  bottom: 35.5px;
  margin: 0 auto;
`

export const bottomButtonStyles = css`
  margin-top: 16px;
  > :first-of-type {
    flex-grow: 115;
  }

  > :last-of-type {
    flex-grow: 212;
  }
`
