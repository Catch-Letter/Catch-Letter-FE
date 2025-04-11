import { FallingLetters, TextSection, Tutorial } from '#/components/inbox'
import { ShareModal } from '#/components/share-modal'
import { useCountdownTimer } from '#/hooks'
import useModal from '#/hooks/useModal'
import { Background, Flex, Header, Modal } from '#/shared/ui'
import { Button } from '#/shared/ui/button'
import { useLetterCreationStore } from '#/store/letterCreateStore'
import { FC, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router'
import { bottomButtonStyles, containerStyles, headerStyles } from '../Inbox.styles'

interface Props {
  uuid: string
  name: string
  expired_at: string
  total_letter_count: number
  inboxUrl: string
}

const LetterReciving: FC<Props> = ({ uuid, name, expired_at, total_letter_count, inboxUrl }) => {
  const { leftTime } = useCountdownTimer(expired_at)
  const { isOpen, openModal, closeModal } = useModal()
  const { isOpen: isOpenTutorial, openModal: openTutorial, closeModal: closeTutorial } = useModal()
  const { setReceiver } = useLetterCreationStore()
  const navigate = useNavigate()
  const { t } = useTranslation()

  useEffect(() => {
    setReceiver(name)
  }, [name, setReceiver])

  return (
    <div css={containerStyles}>
      <Background gradientType='halfGradient' />
      <Header
        css={headerStyles}
        Left={
          <Link to='/' className='left'>
            Catch Letter <div>💌</div>
          </Link>
        }
      />

      <TextSection
        title1={t('inbox.untilClose', { name })}
        value1={leftTime}
        title2={t('inbox.lettersReceived')}
        value2={total_letter_count}
        openTutorial={openTutorial}
      />

      <Flex justify='space-between' gap={16} css={bottomButtonStyles}>
        <Button onClick={openModal} variant='secondary'>
          {t('shareOnSNS')}
        </Button>
        <Button onClick={() => navigate(`/drawing/${uuid}`)}>{t('inbox.goWrite')}</Button>
      </Flex>

      <Modal isOpen={isOpenTutorial} onClickOverlay={closeTutorial}>
        <Tutorial />
      </Modal>

      <FallingLetters />
      <ShareModal
        url={inboxUrl as string}
        isOpen={isOpen}
        onClose={closeModal}
        onClickOverlay={closeModal}
      />
    </div>
  )
}

export default LetterReciving
