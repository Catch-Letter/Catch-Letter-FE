import * as Letters from '#/assets/letters'
import { FallingLetters, TextSection } from '#/components/inbox'
import { Flex, Header } from '#/shared/ui'
import { Button } from '#/shared/ui/button'
import { bottomButtonStyles, containerStyles, headerStyles } from './LetterReceived.styles'

const LetterReciving = () => {
  const received_letter = 120
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
        title1='내가 받은 비밀편지는'
        value1={received_letter}
        title2='풀지 못한 편지'
        value2={total_received_letter}
      />

      <Flex justify='space-between' css={bottomButtonStyles}>
        <Button onClick={() => {}} width={115} variant='secondary'>
          자랑하기
        </Button>
        <Button onClick={() => {}} width={212}>
          편지 확인하기!
        </Button>
      </Flex>

      <FallingLetters letters={letters} />
    </div>
  )
}

export default LetterReciving
