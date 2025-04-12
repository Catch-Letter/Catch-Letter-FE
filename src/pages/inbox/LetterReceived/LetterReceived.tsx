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
import { bottomButtonStyles, containerStyles, headerStyles } from '../Inbox.styles'

interface Props {
  uuid: string
  total_letter_count: number
  incorrect_letter_count: number
  name: string
}

const LetterReceived: FC<Props> = ({ uuid, total_letter_count, incorrect_letter_count, name }) => {
  const { isOpen, openModal, closeModal, password, initializePassword, onPasswordChange } =
    usePasswordModal()
  const { isOpen: isOpenTutorial, openModal: openTutorial, closeModal: closeTutorial } = useModal()
  const navigate = useNavigate()
  const { showToast } = useToastStore()
  const { t } = useTranslation()
  const queryClient = useQueryClient()

  // 확인하기 버튼
  const onClickCheckButton = useCallback(async () => {
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
        onClickInformationButton={openTutorial}
      />

      <Flex justify='space-between' gap={16} css={bottomButtonStyles}>
        <Button
          onClick={() => {
            navigate('/postform')
          }}
          variant='secondary'
        >
          {t('showOff')}
        </Button>
        <Button onClick={onClickCheckButton}>{t('checkLetters')}</Button>
      </Flex>

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

      <Modal isOpen={isOpenTutorial} onClickOverlay={closeTutorial}>
        <Tutorial />
      </Modal>

      <FallingLetters />
      <Toast position='top' offset='24vh' />
    </div>
  )
}

export default LetterReceived
