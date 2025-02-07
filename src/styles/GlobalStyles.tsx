import { css, Global } from '@emotion/react'
import fontStyles from './font'
import { resetCSS } from './reset'

const GlobalStyles = () => (
  <Global
    styles={css`
      ${resetCSS}
      ${fontStyles}
        
        * {
        line-height: 140%;
        letter-spacing: -2.5%;
      }
    `}
  />
)

export default GlobalStyles
