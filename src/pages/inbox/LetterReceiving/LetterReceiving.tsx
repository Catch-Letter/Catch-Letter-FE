// TODO : SNS 공유하기 버튼
import { FallingLetters, TextSection } from '#/components/inbox'
import { useCountdownTimer, useInboxStatus } from '#/hooks'
import { Flex, Header } from '#/shared/ui'
import { Button } from '#/shared/ui/button'
import { FC } from 'react'
import { useNavigate } from 'react-router'
import { bottomButtonStyles, containerStyles, headerStyles } from '../Inbox.styles'

interface Props {
  uuid: string
}

const LetterReciving: FC<Props> = ({ uuid }) => {
  const { name, expired_at, total_letter_count } = useInboxStatus(uuid)
  const { leftTime } = useCountdownTimer(expired_at)
  const navigate = useNavigate()

  return (
    <div css={containerStyles}>
      <Header css={headerStyles} Left={<span className='left'>catch letter</span>} />

      <TextSection
        title1={`${name}의 우체통 마감까지`}
        value1={leftTime}
        title2='지금까지 받은 편지'
        value2={total_letter_count}
      />

      <Flex justify='space-between' gap={16} css={bottomButtonStyles}>
        <Button onClick={() => {}} variant='secondary'>
          SNS 공유하기
        </Button>
        <Button onClick={() => navigate(`/drawing/${uuid}`)}>편지 쓰러 가기!</Button>
      </Flex>

      <FallingLetters />
    </div>
  )
}

export default LetterReciving
