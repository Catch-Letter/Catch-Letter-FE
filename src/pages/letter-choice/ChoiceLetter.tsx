import { fetchSendLetter } from '#/api/sendLetter'
import { LetterCard } from '#/components'
import { LetterContent, Tab } from '#/components/letter-choice'
import { Background, Button, Header } from '#/shared/ui'
import { useLetterCreationStore } from '#/store/letterCreateStore'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate, useParams } from 'react-router'
import { ChoiceLetterStyle, ChoiceLetterWrapper } from './ChoiceLetter.styles'

const ChoiceLetter = () => {
  const { uuid, id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const { t } = useTranslation()
  const letter = location.state
  const { selectedColor, selectedFont, selectedPattern } = useLetterCreationStore()

  const handleSendLetter = async (uuid: string, id: number) => {
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
      navigate(`/sendletter/${uuid}`, {
        state: {
          color: selectedColor,
          img: location.state?.img,
        },
      })
    } catch (error) {
      throw error
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
    </div>
  )
}

export default ChoiceLetter
