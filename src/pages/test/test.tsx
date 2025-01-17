import { testContainerStyles } from '#/shared/utils/styles/test-container'
import { css } from '@emotion/react'

const Test = () => {
  return (
    <div
      css={css`
        /* ${testContainerStyles} */
        color: white;
        height: 100vh;
        background-color: #444;
      `}
    >
      test playground
    </div>
  )
}

export default Test
