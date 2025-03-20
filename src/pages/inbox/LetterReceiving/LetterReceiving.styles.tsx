import { ZIndex } from '#/shared/config'
import { css } from '@emotion/react'

export const bottomButtonStyles = css`
  position: absolute;
  left: 16px;
  right: 16px;
  bottom: 35.5px;
  margin: 0 auto;

  z-index: ${ZIndex.letterInboxUI};
`
