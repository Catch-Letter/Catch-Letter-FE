import { FallingLetters, TextSection } from '#/components/inbox'
import { useInboxStatus } from '#/hooks'
import { Flex, Header } from '#/shared/ui'
import { Button } from '#/shared/ui/button'
import { FC } from 'react'
import { containerStyles, headerStyles } from '../Inbox.styles'
import { bottomButtonStyles } from './LetterReceived.styles'

interface Props {
  uuid: string
}

const LetterReciving: FC<Props> = ({ uuid }) => {
  const { letter_count } = useInboxStatus(uuid)

  const total_received_letter = '???'

  return (
    <div css={containerStyles}>
      <Header css={headerStyles} Left={<span className='left'>catch letter</span>} />

      <TextSection
        title1='내가 받은 비밀편지는'
        value1={letter_count}
        title2='풀지 못한 편지'
        value2={total_received_letter}
      />

      <Flex justify='space-between' gap={16} css={bottomButtonStyles}>
        <Button onClick={() => {}} variant='secondary'>
          자랑하기
        </Button>
        <Button onClick={() => {}}>편지 확인하기!</Button>
      </Flex>

      <FallingLetters />
    </div>
  )
}

export default LetterReciving
