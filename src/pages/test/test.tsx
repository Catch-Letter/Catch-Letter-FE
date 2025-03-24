import { Loading } from '#/components'
import { css } from '@emotion/react'

const Test = () => {
  return (
    <div
      css={css`
        color: white;
        height: 100vh;
        background-color: #444;
      `}
    >
      <Loading />
    </div>
  )
}

export default Test
