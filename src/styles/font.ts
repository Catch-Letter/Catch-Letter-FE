import Thin from '../assets/fonts/NotoSansKR-Thin.woff'
import SemiBold from '../assets/fonts/NotoSansKR-SemiBold.woff'
import Regular from '../assets/fonts/NotoSansKR-Regular.woff'
import Bold from '../assets/fonts/NotoSansKR-Bold.woff'
import Medium from '../assets/fonts/NotoSansKR-Medium.woff'
import Light from '../assets/fonts/NotoSansKR-Light.woff'
import ExtraLight from '../assets/fonts/NotoSansKR-ExtraLight.woff'
import ExtraBold from '../assets/fonts/NotoSansKR-ExtraBold.woff'
import BlackBold from '../assets/fonts/NotoSansKR-Black.woff'
import { css } from '@emotion/react'

const fontStyles = css`
  @font-face {
    font-family: 'NotoSansKR';
    font-weight: 100;
    src: url(${Thin}) format (woff);
  }
  @font-face {
    font-family: 'NotoSansKR';
    font-weight: 200;
    src: url(${ExtraLight}) format(woff);
  }
  @font-face {
    font-family: 'NotoSansKR';
    font-weight: 300;
    src: url(${Light}) format(woff);
  }
  @font-face {
    font-family: 'NotoSansKR';
    font-weight: 400;
    src: url(${Regular}) format(woff);
  }
  @font-face {
    font-family: 'NotoSansKR';
    font-weight: 500;
    src: url(${Medium}) format(woff);
  }
  @font-face {
    font-family: 'NotoSansKR';
    font-weight: 600;
    src: url(${SemiBold}) format(woff);
  }
  @font-face {
    font-family: 'NotoSansKR';
    font-weight: 700;
    src: url(${Bold}) format(woff);
  }
  @font-face {
    font-family: 'NotoSansKR';
    font-weight: 800;
    src: url(${ExtraBold}) format(woff);
  }
  @font-face {
    font-family: 'NotoSansKR';
    font-weight: 900;
    src: url(${BlackBold}) format(woff);
  }
`
export default fontStyles
