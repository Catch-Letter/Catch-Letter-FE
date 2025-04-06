import { colors } from '#/styles/color'
import { css } from '@emotion/react'

export const SuccessStyle = css`
  display: flex;
  flex-direction: column;
  height: 90%;
  color: ${colors.white};

  .btn_share {
    margin-top: 12px;
    @media (width >= 768px) {
      width: 60%;
    }
  }
`

export const SuccessWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;

  .area_desc {
    padding: 42px 67px 0px 35px;
    flex-grow: 1;

    @media (width >= 768px) {
      width: 60%;
    }
  }
`
