import { colors } from '#/styles/color'
import { css } from '@emotion/react'

export const EventNoticeWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 10px;
  }

  .event-date {
    font-size: 12px;
    margin-bottom: 20px;
    text-align: center;
    color: ${colors.green[3]};
  }

  .event-font {
    font-size: 16px;
    font-weight: 700;
  }

  .desc-message {
    width: 250px;
    font-size: 14px;
    line-height: 18px;
    color: ${colors.green[3]};
    margin: 12px auto;
  }
`
