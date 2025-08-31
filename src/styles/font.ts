import {
  BlackBold,
  Bold,
  ExtraBold,
  ExtraLight,
  Light,
  Medium,
  NanumPen,
  OwnglyphEuiyeon,
  Regular,
  SemiBold,
  Thin,
} from '#/assets/fonts'
import { css } from '@emotion/react'

const fontStyles = css`
  @font-face {
    font-family: 'NotoSansKR';
    font-weight: 100;
    src: url(${Thin}) format('woff');
    font-display: block;
  }
  @font-face {
    font-family: 'NotoSansKR';
    font-weight: 200;
    src: url(${ExtraLight}) format('woff');
    font-display: block;
  }
  @font-face {
    font-family: 'NotoSansKR';
    font-weight: 300;
    src: url(${Light}) format('woff');
    font-display: block;
  }
  @font-face {
    font-family: 'NotoSansKR';
    font-weight: 400;
    src: url(${Regular}) format('woff');
    font-display: block;
  }
  @font-face {
    font-family: 'NotoSansKR';
    font-weight: 500;
    src: url(${Medium}) format('woff');
    font-display: block;
  }
  @font-face {
    font-family: 'NotoSansKR';
    font-weight: 600;
    src: url(${SemiBold}) format('woff');
    font-display: block;
  }
  @font-face {
    font-family: 'NotoSansKR';
    font-weight: 700;
    src: url(${Bold}) format('woff');
    font-display: block;
  }
  @font-face {
    font-family: 'NotoSansKR';
    font-weight: 800;
    src: url(${ExtraBold}) format('woff');
    font-display: block;
  }
  @font-face {
    font-family: 'NotoSansKR';
    font-weight: 900;
    src: url(${BlackBold}) format('woff');
    font-display: block;
  }

  @font-face {
    font-family: 'NanumPen';
    src: url(${NanumPen}) format('woff');
    font-display: block;
  }

  @font-face {
    font-family: 'Ownglyph';
    src: url(${OwnglyphEuiyeon}) format('woff');
    font-display: block;
  }
`
export default fontStyles
