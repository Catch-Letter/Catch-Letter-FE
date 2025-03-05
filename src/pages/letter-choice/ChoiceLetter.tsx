import { BackHeader, LetterCard } from '#/components'
import { LetterContent, Tab } from '#/components/letter-choice'
import { Button } from '#/shared/ui/button'
import { useLetterCreationStore } from '#/store/letterCreateStore'
import { useLocation, useNavigate, useParams } from 'react-router'
import { ChoiceLetterStyle, ChoiceLetterWrapper } from './ChoiceLetter.styles'
import { apiClient } from '#/api/apiClient'
import { API_ENDPOINTS } from '#/api/apiEndpoints'
import { Background } from '#/shared/ui/background'

const ChoiceLetter = () => {
  const { uuid, id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const letterInfo = location.state
  const { selectedColor, selectedFont, selectedPattern, resetStore } = useLetterCreationStore()

  const handleSendLetter = async (uuid: string, id: number) => {
    try {
      const res = await apiClient.post(API_ENDPOINTS.SEND_LETTER(uuid, id), {
        to: letterInfo.to,
        from: letterInfo.from,
        contents: letterInfo.content,
        etc: JSON.stringify({
          color: selectedColor,
          font: selectedFont,
          pattern: selectedPattern,
        }),
      })

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
        to: letterInfo.to,
        content: letterInfo.content,
        from: letterInfo.from,
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
              to={letterInfo.to}
              content={letterInfo.content}
              from={letterInfo.from}
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
