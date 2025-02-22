import { ZIndex } from '#/shared/config'
import { css } from '@emotion/react'

export const containerStyles = css`
  width: 375px;
  height: 768px;
  position: relative;
  background-color: transparent;
  z-index: ${ZIndex.fallingLetter};
`

export const headerStyles = css`
  z-index: ${ZIndex.letterInboxUI};

  .left {
    font-size: 24px;
    font-weight: 700;
    margin-left: 6px;
  }
`

export const bottomButtonStyles = css`
  position: absolute;
  left: 16px;
  right: 16px;
  bottom: 35.5px;
  margin: 0 auto;

  z-index: ${ZIndex.letterInboxUI};
`
