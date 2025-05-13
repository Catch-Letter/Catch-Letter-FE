import { fetchSendLetter } from '#/api/sendLetter'
import { LetterCard, Toast } from '#/components'
import { LetterContent, Tab } from '#/components/letter-choice'
import { Background, Button, Header } from '#/shared/ui'
import { useLetterCreationStore } from '#/store/letterCreateStore'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate, useParams } from 'react-router'
import { ChoiceLetterStyle, ChoiceLetterWrapper } from './ChoiceLetter.styles'
import { trackBtnClick } from '#/shared/utils/gtag'
import { EventModal } from '#/components/event/event-modal'
import { useModal } from '#/hooks'
import { useState } from 'react'
import { fetchParticipantEvent } from '#/api/event'
import { useToastStore } from '#/store/toastStore'
import axios from 'axios'
import useEventStatus from '#/hooks/useEventStatus'

const ChoiceLetter = () => {
  const { uuid, id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const { t } = useTranslation()
  const { openModal, closeModal, isOpen } = useModal()
  const [isSentLetter, setIsSentLetter] = useState(false)
  const { event, startDate, endDate } = useEventStatus()
  const letter = location.state
  const { showToast } = useToastStore()
  const { selectedColor, selectedFont, selectedPattern } = useLetterCreationStore()

  const navigateSendLetter = () => {
    navigate(`/sendletter/${uuid}`, {
      state: {
        color: selectedColor,
        img: location.state?.img,
      },
    })
  }

  const handleSendLetter = async (uuid: string, id: number) => {
    trackBtnClick('sendLetter')

    const letterData = {
      to: letter.to,
      from: letter.from,
      contents: letter.content,
      etc: JSON.stringify({
        color: selectedColor,
        font: selectedFont,
        pattern: selectedPattern,
      }),
    }

    try {
      await fetchSendLetter(uuid, id, letterData)
      setIsSentLetter(true)

      if (event) {
        openModal()
      } else {
        navigateSendLetter()
      }
    } catch (error) {
      throw error
    }
  }

  const handleCloseModal = () => {
    if (isSentLetter) {
      navigateSendLetter()
    }
    closeModal()
  }

  const handleEventModal = async (phoneNumber: string) => {
    try {
      const res = await fetchParticipantEvent(event, phoneNumber)
      showToast(t('success_entry'), 'success', 'page')
      setTimeout(() => {
        navigateSendLetter()
      }, 1000)
      return res.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data.message || '에러가 발생했습니다.'
        showToast(message, 'error', 'page')
      }
    }
  }

  const handlePrev = () => {
    navigate(`/writeletter/${uuid}/${id}`, {
      state: {
        ...location.state,
        to: letter.to,
        content: letter.content,
        from: letter.from,
      },
    })
  }

  return (
    <div css={ChoiceLetterWrapper}>
      <Background color={selectedColor} />
      <Header Center={t('theme.title')} />
      <div css={ChoiceLetterStyle}>
        <div className='content'>
          <LetterCard type={selectedColor} height='100%'>
            <LetterContent
              {...letter}
              color={selectedColor}
              pattern={selectedPattern}
              font={selectedFont}
            />
          </LetterCard>
        </div>
        <Tab />
        <div className='button-area'>
          <Button variant='secondary' width={82} onClick={handlePrev}>
            {t('before')}
          </Button>
          <Button width={245} onClick={() => handleSendLetter(uuid!, Number(id))}>
            {t('theme.sendLetter')}
          </Button>
        </div>
      </div>
      <EventModal
        startDate={startDate}
        endDate={endDate}
        isOpen={isOpen}
        onClose={handleCloseModal}
        onClickOverlay={handleCloseModal}
        onSubmit={(phoneNumber: string) => handleEventModal(phoneNumber)}
      />
      <Toast />
    </div>
  )
}

export default ChoiceLetter
