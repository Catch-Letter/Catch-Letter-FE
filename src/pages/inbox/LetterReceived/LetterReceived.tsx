import { useEffect } from 'react'
import { getPostInfo } from '#/api'
import { Toast } from '#/components'
import { FallingLetters, TextSection, Tutorial } from '#/components/inbox'
import { PasswordModal } from '#/components/inbox/PasswordModal'
import { useLogin, useModal, usePasswordModal } from '#/hooks'
import { Flex, Header, Modal } from '#/shared/ui'
import { Button } from '#/shared/ui/button'
import { useToastStore } from '#/store/toastStore'
import { useQueryClient } from '@tanstack/react-query'
import { FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router'
import {
  bottomButtonStyles,
  containerStyles,
  headerStyles,
  buttonGroupStyles,
} from '../Inbox.styles'
import { ShareModal } from '#/components/share-modal'
import { useLetterCreationStore } from '#/store/letterCreateStore'
import { trackBtnClick } from '#/shared/utils/gtag'
import { EventNotice } from '#/components/event'
import useEventStatus from '#/hooks/useEventStatus'
import { EventModalWrapper } from '#/components/event/event-modal/EvnetModal.styles'

interface Props {
  uuid: string
  total_letter_count: number
  incorrect_letter_count: number
  name: string
  inboxUrl: string
}

const LetterReceived: FC<Props> = ({
  uuid,
  total_letter_count,
  incorrect_letter_count,
  name,
  inboxUrl,
}) => {
  const { isOpen, openModal, closeModal, password, initializePassword, onPasswordChange } =
    usePasswordModal()
  const { isOpen: isOpenTutorial, openModal: openTutorial, closeModal: closeTutorial } = useModal()
  const { isOpen: isOpenShare, openModal: openShareModal, closeModal: closeShareModal } = useModal()
  const { isOpen: isOpenEvent, openModal: openEvent, closeModal: closeEvent } = useModal()
  const { event, startDate, endDate } = useEventStatus()
  const { setReceiver } = useLetterCreationStore()
  const navigate = useNavigate()
  const { showToast } = useToastStore()
  const { t } = useTranslation()
  const queryClient = useQueryClient()

  useEffect(() => {
    setReceiver(name)
  }, [name, setReceiver])

  // 그림 맞추기 버튼
  const onClickCheckButton = useCallback(async () => {
    trackBtnClick('checkLetters')

    try {
      const postInfo = await queryClient.fetchQuery({
        queryKey: ['postInfo', uuid],
        queryFn: () => getPostInfo(),
      })

      if (postInfo.uuid !== uuid) {
        throw Error()
      }

      // 이미 로그인 된 경우
      navigate(`/myletters/${uuid}`)
    } catch (err) {
      openModal()
    }
  }, [])

  // 그림 남기기 버튼
  const onClickGoWrite = () => {
    trackBtnClick('goWrite')
    navigate(`/drawing/${uuid}`)
  }

  // 우체통 만들기 버튼
  const onClickCreatePost = () => {
    trackBtnClick('createPostFromInbox')
    navigate('/')
  }

  // 공유 버튼
  const onClickShare = () => {
    trackBtnClick('shareFromInbox')
    openShareModal()
  }

  // modal
  const onAuthSuccess = useCallback(() => {
    initializePassword()
    closeModal()
    navigate(`/myletters/${uuid}`)
  }, [])
  const onAuthFail = useCallback(() => {
    initializePassword()
    showToast('비밀번호가 일치하지 않아요', 'error')
  }, [])

  const { login } = useLogin({ onAuthSuccess, onAuthFail })

  return (
    <div css={containerStyles}>
      <Header
        css={headerStyles}
        Left={
          <Link to='/' className='left'>
            Catch Letter <div>💌</div>
          </Link>
        }
      />

      <TextSection
        title1={t('inbox.totalLetterCount', { name })}
        value1={total_letter_count}
        title2={t('inbox.unsolvedLetters')}
        value2={incorrect_letter_count}
        onClickShareButton={onClickShare}
        onClickInformationButton={openTutorial}
        onClickEventButton={event ? openEvent : undefined}
      />

      <div css={buttonGroupStyles}>
        <Button full={true} onClick={onClickGoWrite}>
          {t('inbox.goWrite')}
        </Button>
        <Flex justify='space-between' gap={16} css={bottomButtonStyles}>
          <Button onClick={onClickCreatePost} variant='secondary'>
            {t('showOff')}
          </Button>
          <Button onClick={onClickCheckButton}>{t('checkLetters')}</Button>
        </Flex>
      </div>

      <PasswordModal
        password={password}
        onChangeValue={onPasswordChange}
        isOpen={isOpen}
        onClickConfirmButton={() => login({ uuid, name, password })}
        onClickOverlay={() => {
          closeModal()
          initializePassword()
        }}
      />

      <ShareModal
        url={inboxUrl as string}
        isOpen={isOpenShare}
        onClose={closeShareModal}
        onClickOverlay={closeShareModal}
      />

      <Modal isOpen={isOpenTutorial} onClickOverlay={closeTutorial}>
        <Tutorial />
      </Modal>

      {event && (
        <Modal isOpen={isOpenEvent} onClickOverlay={closeEvent}>
          <div css={EventModalWrapper}>
            <EventNotice startDate={startDate} endDate={endDate} />
            <Button onClick={onClickGoWrite}>{t('inbox.goWrite')}</Button>
          </div>
        </Modal>
      )}

      <FallingLetters />
      <Toast position='top' offset='24vh' />
    </div>
  )
}

export default LetterReceived
