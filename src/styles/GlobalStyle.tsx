import { css, Global } from '@emotion/react'
import fontStyles from './font'
import { resetCSS } from './reset'
import { colors } from '#/styles/color'

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        ${resetCSS}
        ${fontStyles}
        
        body {
          line-height: 140%;
          letter-spacing: -0.0025rem;
          background-color: #444;
          color: ${colors.grey[1]};
        }
      `}
    />
  )
}

export default GlobalStyle
