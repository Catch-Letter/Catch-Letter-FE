import { FallingLetters, TextSection } from '#/components/inbox'
import { useInboxStatus } from '#/hooks'
import { Flex, Header } from '#/shared/ui'
import { Button } from '#/shared/ui/button'
import { FC } from 'react'
import { bottomButtonStyles, containerStyles, headerStyles } from '../Inbox.styles'

interface Props {
  uuid: string
}

const LetterReciving: FC<Props> = ({ uuid }) => {
  const { name, time_left, total_letter_count } = useInboxStatus(uuid)

  return (
    <div css={containerStyles}>
      <Header css={headerStyles} Left={<span className='left'>catch letter</span>} />

      <TextSection
        title1={`${name}의 우체통 마감까지`}
        value1={time_left}
        title2='지금까지 받은 편지'
        value2={total_letter_count}
      />

      <Flex justify='space-between' gap={16} css={bottomButtonStyles}>
        <Button onClick={() => {}} variant='secondary'>
          SNS 공유하기
        </Button>
        <Button onClick={() => {}}>편지 쓰러 가기!</Button>
      </Flex>

      <FallingLetters />
    </div>
  )
}

export default LetterReciving
