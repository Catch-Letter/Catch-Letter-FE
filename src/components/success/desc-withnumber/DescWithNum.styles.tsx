import { colors } from '#/styles/color'
import { css } from '@emotion/react'

export const DescWithNumWrapper = (width: string) => css`
  display: flex;
  gap: 10px;
  background-color: inherit;
  align-items: flex-start;

  .number {
    width: 24px;
    height: 24px;
    border-radius: 100%;
    text-align: center;
    background-color: #4e4e4e;
    color: ${colors.white};
    font-size: 14px;
    font-weight: 500;
    line-hegiht: 24px;
    margin-top: 1px;
  }

  .desc {
    color: ${colors.white};
    width: ${width ? width : '100%'};
    font-size: 24px;
    font-weight: 700;
    line-height: 110%;
  }
`
