import { ZIndex } from '#/shared/config'
import { css } from '@emotion/react'

export const containerStyles = css`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: transparent;
  z-index: ${ZIndex.fallingLetter};
  overflow-y: hidden;
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
  z-index: ${ZIndex.letterInboxUI};
  left: 16px;
  right: 16px;
  bottom: 35.5px;
  margin: 0 auto;

  > :first-of-type {
    flex-grow: 115;
  }

  > :last-of-type {
    flex-grow: 212;
  }
`
