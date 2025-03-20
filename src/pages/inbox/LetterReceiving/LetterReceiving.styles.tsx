import { ZIndex } from '#/shared/config'
import { css } from '@emotion/react'

export const bottomButtonStyles = css`
  position: absolute;
  left: 16px;
  bottom: 35.5px;

  z-index: ${ZIndex.letterInboxUI};
`
