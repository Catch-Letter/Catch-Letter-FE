import { colors } from '#/styles/color'
import { css } from '@emotion/react'

export const EventModalWrapper = css`
  max-width: 80%;
  background-color: ${colors.grey[13]};
  border-radius: 8px;
  border: 1px solid ${colors.grey[8]};
  align-items: center;
  padding: 32px;
`

export const EventModalContainer = css`
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

  .font-neon {
    color: ${colors.neonGreen[6]};
    font-weight: 700;
  }

  .desc {
    width: 280px;
    font-size: 14px;
    line-height: 18px;
    color: ${colors.green[3]};
    margin: 12px 0;

    .desc-message {
      width: 250px;
      margin: 0 auto 14px;
    }
  }

  .event-font {
    font-size: 16px;
    font-weight: 700;
  }

  .notice-event {
    font-size: 10px;
    margin-bottom: 10px;
  }

  .button-area {
    display: flex;
    gap: 12px;
  }
`
