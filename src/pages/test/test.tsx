import { Loading } from '#/components'
import { colors } from '#/styles/color'
import { css } from '@emotion/react'

const Test = () => {
  return (
    <div
      css={css`
        color: white;
        height: 100vh;
        background-color: ${colors.grey[11]};
      `}
    >
      <Loading />
    </div>
  )
}

export default Test
