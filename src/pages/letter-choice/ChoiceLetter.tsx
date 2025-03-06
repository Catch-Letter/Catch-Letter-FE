import { BackHeader, LetterCard } from '#/components'
import { LetterContent, Tab } from '#/components/letter-choice'
import { Button } from '#/shared/ui/button'
import { useLetterCreationStore } from '#/store/letterCreateStore'
import { useLocation, useNavigate, useParams } from 'react-router'
import { ChoiceLetterStyle, ChoiceLetterWrapper } from './ChoiceLetter.styles'
import { Background } from '#/shared/ui/background'
import { fetchSendLetter } from '#/api/sendLetter'

const ChoiceLetter = () => {
  const { uuid, id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
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
      <BackHeader Center='편지지 고르기' />
      <div css={ChoiceLetterStyle}>
        <div className='content'>
          <LetterCard type={selectedColor}>
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
            이전
          </Button>
          <Button width={245} onClick={() => handleSendLetter(uuid, Number(id))}>
            편지 보내기
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ChoiceLetter
