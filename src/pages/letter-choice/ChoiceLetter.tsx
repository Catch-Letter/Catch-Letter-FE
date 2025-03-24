import { Header, Button } from '#/shared/ui'
import { LetterCard } from '#/components'
import { LetterContent, Tab } from '#/components/letter-choice'
import { useLetterCreationStore } from '#/store/letterCreateStore'
import { useLocation, useNavigate, useParams } from 'react-router'
import { ChoiceLetterStyle, ChoiceLetterWrapper } from './ChoiceLetter.styles'
import { Background } from '#/shared/ui/background'
import { fetchSendLetter } from '#/api/sendLetter'
import { useTranslation } from 'react-i18next'

const ChoiceLetter = () => {
  const { uuid, id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const { t } = useTranslation()
  const letter = location.state
  const { selectedColor, selectedFont, selectedPattern, resetStore } = useLetterCreationStore()

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
      const res = await fetchSendLetter(uuid, id, letterData)
      navigate('/sendletter', {
        state: {
          color: selectedColor,
          img: location.state?.img,
        },
      })
      resetStore()
      return res.data
    } catch (error) {
      console.error(error)
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

  if (!uuid) return <div>페이지를 찾을 수 없습니다</div>

  return (
    <div css={ChoiceLetterWrapper}>
      <Background color={selectedColor} />
      <Header Center={t('theme.title')} />
      <div css={ChoiceLetterStyle}>
        <div className='content'>
          <LetterCard type={selectedColor} height='90%'>
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
          <Button width={245} onClick={() => handleSendLetter(uuid, Number(id))}>
            {t('theme.sendLetter')}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ChoiceLetter
