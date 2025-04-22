// TODO:  uuid를 통해 형재 우체통이 유효한지 확인하는 로직 필요.
import { Loading } from '#/components'
import { useInboxStatus } from '#/hooks'
import { NotFound } from '#/pages/error'
import { LetterReceived } from '#/pages/inbox'
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

  if (inboxStatus.isPending) {
    return <Loading />
  }

  if (inboxStatus.error) {
    return <NotFound />
  }

  return <LetterReceived uuid={uuid} {...inboxStatus} />
}

export default Inbox
