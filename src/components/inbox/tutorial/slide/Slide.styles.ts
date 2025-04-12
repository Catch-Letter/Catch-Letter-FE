import { colors } from '#/styles/color'
import { css } from '@emotion/react'

export const SlideStyles = css`
  height: fit-content;
  transform: translate3d(0, 0, 0);
  flex: 0 0 var(--slide-size, 80%);
  min-width: 0;
  padding: 16px;
  list-style: none;
  color: ${colors.white};
  text-align: center;
  border: 1px solid ${colors.grey[7]};
  border-radius: 20px;
  min-height: 360px;
  user-select: none;

  .order {
    color: ${colors.green[4]};
    text-align: center;
    font-size: 16px;
    font-weight: 400;
  }

  .title {
    font-size: 24px;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 16px;
  }

  img {
    max-width: 80%;
  }

  .description {
    margin-top: 16px;
    white-space: wrap;
  }
`
