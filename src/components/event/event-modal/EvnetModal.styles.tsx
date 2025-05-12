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
