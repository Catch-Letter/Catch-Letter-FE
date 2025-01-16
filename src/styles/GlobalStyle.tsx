import { css, Global } from '@emotion/react'
import fontStyles from './font'
import { resetCSS } from './reset'

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        ${resetCSS}
        ${fontStyles}
        
        body {
          line-height: 140%;
          letter-spacing: -2.5%;
        }
      `}
    />
  )
}

export default GlobalStyle
