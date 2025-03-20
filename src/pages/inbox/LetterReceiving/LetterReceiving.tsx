import * as Letters from '#/assets/letters'
import { FallingLetters, TextSection } from '#/components/inbox'
import useInboxStatus from '#/hooks/useInboxStatus'
import { Header } from '#/shared/ui'
import { Button } from '#/shared/ui/button'
import { FC } from 'react'
import { containerStyles, headerStyles } from '../Inbox.styles'
import { bottomButtonStyles } from './LetterReceiving.styles'

interface Props {
  uuid: string
}

const LetterReciving: FC<Props> = ({ uuid }) => {
  const { time_left, letter_count } = useInboxStatus(uuid)

  const letters = Object.values(Letters).concat(Object.values(Letters).slice(3))

  return (
    <div css={containerStyles}>
      <Header css={headerStyles} Left={<span className='left'>catch letter</span>} />

      <TextSection
        title1='우체통 마감까지'
        value1={time_left}
        title2='지금까지 받은 편지'
        value2={letter_count}
      />

      <Button onClick={() => {}} width={'calc(100% - 32px)'} css={bottomButtonStyles}>
        SNS 공유하기
      </Button>

      <FallingLetters letters={letters} />
    </div>
  )
}

export default LetterReciving
