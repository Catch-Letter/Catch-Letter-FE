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
