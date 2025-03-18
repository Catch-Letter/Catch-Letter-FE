import { colors } from '#/styles/color'
import { css } from '@emotion/react'

export const SuccessStyle = css`
  height: 100%;
  color: ${colors.white};
`

export const SuccessWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;

  .area_desc {
    width: 280px;
    margin: 42px 67px 243px 35px;

    @media (width >= 768px) {
      width: 60%;
      margin-left: 10%;
    }
  }

  .btn_share {
    margin-top: 10px;
    @media (width >= 768px) {
      width: 60%;
      margin-top: 28px;
    }
  }
`
