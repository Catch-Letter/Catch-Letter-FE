import { ZIndex } from '#/shared/config'
import { css } from '@emotion/react'

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
