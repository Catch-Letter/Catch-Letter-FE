// TODO: 비번 value 초기화시에 input ui에 적용되지 않는 문제 있음
import { FallingLetters, TextSection } from '#/components/inbox'
import { PasswordModal } from '#/components/inbox/PasswordModal'
import { useInboxStatus, useLogin, usePasswordModal } from '#/hooks'
import { Flex, Header } from '#/shared/ui'
import { Button } from '#/shared/ui/button'
import { useAuthStore } from '#/store/authStore'
import { FC, useCallback } from 'react'
import { useNavigate } from 'react-router'
import { bottomButtonStyles, containerStyles, headerStyles } from '../Inbox.styles'
import { useTranslation } from 'react-i18next'

interface Props {
  uuid: string
}

const LetterReciving: FC<Props> = ({ uuid }) => {
  const { total_letter_count, incorrect_letter_count, name } = useInboxStatus(uuid)
  const { isOpen, openModal, closeModal, password, initializePassword, onPasswordChange } =
    usePasswordModal()
  const { accessToken } = useAuthStore()
  const navigate = useNavigate()
  const { t } = useTranslation()

  // 확인하기 버튼
  const onClickCheckButton = useCallback(() => {
    if (accessToken) return navigate(`/myletters/${uuid}`)

    openModal()
  }, [])

  // modal
  const onAuthSuccess = useCallback(() => {
    initializePassword()
    closeModal()
    navigate(`/myletters/${uuid}`)
  }, [])
  const onAuthFail = useCallback(() => {
    initializePassword()
    alert('비번 틀림')
  }, [])

  const { login } = useLogin({ onAuthSuccess, onAuthFail })

  return (
    <div css={containerStyles}>
      <Header css={headerStyles} Left={<span className='left'>catch letter</span>} />

      <TextSection
        title1={t('inbox.totalLetterCount', { name })}
        value1={total_letter_count}
        title2={t('inbox.unsolvedLetters')}
        value2={incorrect_letter_count}
      />

      <Flex justify='space-between' gap={16} css={bottomButtonStyles}>
        <Button onClick={() => {}} variant='secondary'>
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
    </div>
  )
}

export default LetterReciving
