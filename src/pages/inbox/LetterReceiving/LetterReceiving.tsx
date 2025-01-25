import * as Letters from '#/assets/letters'
import { FallingLetters, TextSection } from '#/components/inbox'
import { Header } from '#/shared/ui'
import { Button } from '#/shared/ui/button'
import { bottomButtonStyles, containerStyles, headerStyles } from './LetterReceiving.styles'

const LetterReciving = () => {
  const time_left = '13:10:09'
  const total_received_letter = 120
  const letters = Object.values(Letters).concat(Object.values(Letters).slice(3))

  return (
    <div css={containerStyles}>
      <Header
        css={headerStyles}
        Left={<span className='left'>catch letter</span>}
        Right={<button>한/영</button>}
      />

      <TextSection
        title1='우체통 마감까지'
        value1={time_left}
        title2='지금까지 받은 편지'
        value2={total_received_letter}
      />

      <Button onClick={() => {}} width={343} css={bottomButtonStyles}>
        SNS 공유하기
      </Button>

      <FallingLetters letters={letters} />
    </div>
  )
}

export default LetterReciving
