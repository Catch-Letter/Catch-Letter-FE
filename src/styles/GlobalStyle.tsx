import { css, Global } from '@emotion/react'
import fontStyles from './font'
import { resetCSS } from './reset'

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        ${resetCSS}
        ${fontStyles}
      `}
    />
  )
}

export default GlobalStyle
