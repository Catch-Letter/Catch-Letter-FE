// TODO:  uuid를 통해 형재 우체통이 유효한지 확인하는 로직 필요.
import { useInboxStatus } from '#/hooks'
import { LetterReceived, LetterReceiving } from '#/pages/inbox'
import { useNavigate, useParams } from 'react-router'

const Inbox = () => {
  const navigate = useNavigate()
  const { uuid } = useParams()

  if (!uuid) {
    alert('존재하지 않은 우체통이에요.')
    navigate('/', { replace: true })
    return
  }

  const inboxStatus = useInboxStatus(uuid)

  if (inboxStatus.isPending || inboxStatus.error) {
    return
  }

  return (
    <>
      {/* {inboxStatus.isExpired ? ( */}
      <LetterReceived uuid={uuid} {...inboxStatus} />
      {/* ) : ( */}
      {/* <LetterReceiving uuid={uuid} {...inboxStatus} /> */}
      {/* // )} */}
    </>
  )
  // return <LetterReceived uuid={uuid} />
}

export default Inbox
