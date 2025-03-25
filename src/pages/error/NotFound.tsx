import { Button } from '#/shared/ui'
import ErrorImage from '#/assets/myLetters/bubbles.svg'
import { ErrorContainer } from './NotFound.styles'
import { useNavigate } from 'react-router'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div css={ErrorContainer}>
      <img src={ErrorImage} alt='error-image' />
      <h1>404 - 페이지를 찾을 수 없습니다</h1>
      <p>
        요청하신 페이지가 존재하지 않거나, <br />
        삭제되었어요 🥲
      </p>
      <div className='button-wrapper'>
        <Button
          variant='secondary'
          width={140}
          onClick={() => {
            navigate(-1)
          }}
        >
          이전으로
        </Button>
        <Button
          width={140}
          onClick={() => {
            navigate('/')
          }}
        >
          홈으로
        </Button>
      </div>
    </div>
  )
}

export default NotFound
