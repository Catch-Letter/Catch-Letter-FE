// TODO: 비번 value 초기화시에 input ui에 적용되지 않는 문제 있음
import { Toast } from '#/components'
import { FallingLetters, TextSection } from '#/components/inbox'
import { PasswordModal } from '#/components/inbox/PasswordModal'
import { useLogin, usePasswordModal } from '#/hooks'
import { Flex, Header } from '#/shared/ui'
import { Button } from '#/shared/ui/button'
import { useToastStore } from '#/store/toastStore'
import { FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'
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
  const navigate = useNavigate()
  const { showToast } = useToastStore()
  const { t } = useTranslation()

  // 확인하기 버튼
  const onClickCheckButton = useCallback(async () => {
    try {
      // 이미 로그인 되어 있는 경우
      const postInfo = await getPostInfo()

      if (postInfo.uuid === uuid) {
        navigate(`/myletters/${uuid}`)
        return
      }
    } catch {
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
          <span className='left'>
            Catch Letter <div>💌</div>
          </span>
        }
      />

      <TextSection
        title1={t('inbox.totalLetterCount', { name })}
        value1={total_letter_count}
        title2={t('inbox.unsolvedLetters')}
        value2={incorrect_letter_count}
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

      <FallingLetters />
      <Toast position='top' offset='24vh' />
    </div>
  )
}

export default LetterReceived
