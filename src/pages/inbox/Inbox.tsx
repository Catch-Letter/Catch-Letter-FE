// TODO:  uuid를 통해 형재 우체통이 유효한지 확인하는 로직 필요.
import { useInboxStatus } from '#/hooks'
import { useNavigate, useParams } from 'react-router'
import { LetterReceived, LetterReciving } from '.'

const Inbox = () => {
  const navigate = useNavigate()
  const { uuid } = useParams()

  if (!uuid) {
    alert('존재하지 않은 우체통이에요.')
    navigate('/', { replace: true })
    return
  }

  const { isExpired, isPending, error } = useInboxStatus(uuid)

  if (isPending || error) {
    return
  }

  return <>{isExpired ? <LetterReceived uuid={uuid} /> : <LetterReciving uuid={uuid} />}</>
}

export default Inbox
