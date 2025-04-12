import { ZIndex } from '#/shared/config'
import { colors } from '#/styles/color'
import { css } from '@emotion/react'

export const textSectionStyles = css`
  background-color: transparent;
  color: ${colors.grey[1]};
  margin: 0 26px;
  margin-top: 24px;
  position: relative;
  z-index: ${ZIndex.letterInboxUI};
  line-height: 1;

  .title1 {
    font-size: 18px;
    font-weight: 400;

    > svg:hover {
      cursor: pointer;
    }
  }

  .value1 {
    font-size: 56px;
    font-weight: 900;
  }

  .title2 {
    font-size: 14px;
    font-weight: 400;
  }

  .value2 {
    font-size: 32px;
    font-weight: 900;
  }
`
