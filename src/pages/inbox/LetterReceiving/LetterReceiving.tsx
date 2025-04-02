import { FallingLetters, TextSection } from '#/components/inbox'
import { useCountdownTimer, useInboxStatus } from '#/hooks'
import { Background, Flex, Header } from '#/shared/ui'
import { Button } from '#/shared/ui/button'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'
import { bottomButtonStyles, containerStyles, headerStyles } from '../Inbox.styles'
import useModal from '#/hooks/useModal'
import { ShareModal } from '#/components/share-modal'

interface Props {
  uuid: string
}

const LetterReciving: FC<Props> = ({ uuid }) => {
  const { name, expired_at, total_letter_count, inboxUrl } = useInboxStatus(uuid)
  const { leftTime } = useCountdownTimer(expired_at)
  const { isOpen, openModal, closeModal } = useModal()
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <div css={containerStyles}>
      <Background gradientType='halfGradient' />
      <Header css={headerStyles} Left={<span className='left'>catch letter</span>} />

      <TextSection
        title1={t('inbox.untilClose', { name })}
        value1={leftTime}
        title2={t('inbox.lettersReceived')}
        value2={total_letter_count}
      />

      <Flex justify='space-between' gap={16} css={bottomButtonStyles}>
        <Button onClick={openModal} variant='secondary'>
          {t('shareOnSNS')}
        </Button>
        <Button onClick={() => navigate(`/drawing/${uuid}`)}>{t('inbox.goWrite')}</Button>
      </Flex>
      <FallingLetters />
      <ShareModal url={inboxUrl as string} isOpen={isOpen} onClose={closeModal} />
    </div>
  )
}

export default LetterReciving
