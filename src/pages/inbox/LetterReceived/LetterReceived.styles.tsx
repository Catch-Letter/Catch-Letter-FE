import { ZIndex } from '#/shared/config'
import { css } from '@emotion/react'

export const bottomButtonStyles = css`
  position: absolute;
  z-index: ${ZIndex.letterInboxUI};
  height: 50px;
  left: 16px;
  right: 16px;
  bottom: 35.5px;
  margin: 0 auto;
`
