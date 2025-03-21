// TODO: 비번 value 초기화시에 input ui에 적용되지 않는 문제 있음
import { FallingLetters, TextSection } from '#/components/inbox'
import { PasswordModal } from '#/components/inbox/PasswordModal'
import { useInboxStatus, useLogin, usePasswordModal } from '#/hooks'
import { Flex, Header } from '#/shared/ui'
import { Button } from '#/shared/ui/button'
import { FC, useCallback } from 'react'
import { useNavigate } from 'react-router'
import { containerStyles, headerStyles } from '../Inbox.styles'
import { bottomButtonStyles } from './LetterReceived.styles'
import { useAuthStore } from '#/store/authStore'

interface Props {
  uuid: string
}

const LetterReciving: FC<Props> = ({ uuid }) => {
  const { letter_count, name } = useInboxStatus(uuid)
  const { isOpen, openModal, closeModal, password, initializePassword, onPasswordChange } =
    usePasswordModal()

  const { accessToken } = useAuthStore()
  const navigate = useNavigate()
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
        <Button onClick={onClickCheckButton}>편지 확인하기!</Button>
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
