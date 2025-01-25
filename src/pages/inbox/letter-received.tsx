import * as Letters from '#/assets/letters'
import { FallingLetters, TextSection } from '#/components/inbox'
import { Header } from '#/shared/ui'
import { css } from '@emotion/react'

const LetterReciving = () => {
  const time_left = '13:10:09'
  const total_received_letter = 120
  const letters = Object.values(Letters).concat(Object.values(Letters).slice(3))

  return (
    <div
      css={css`
        width: 400px;
        position: relative;
        background-color: white;
      `}
    >
      <Header
        Left={
          <span
            css={css`
              font-size: 24px;
              font-weight: 700;
              margin-left: 13px;
            `}
          >
            catch letter
          </span>
        }
        Right={
          <button
            css={css`
              position: absolute;
              z-index: 2;
            `}
          >
            한/영
          </button>
        }
      />

      <TextSection
        title1='우체통 마감까지'
        value1={time_left}
        title2='지금까지 받은 편지'
        value2={total_received_letter}
      />

      <FallingLetters letters={letters} />
    </div>
  )
}

export default LetterReciving
