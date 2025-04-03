import { useEffect } from 'react'
import { useInboxStatus } from '#/hooks'
import { Outlet, useNavigate, useParams } from 'react-router'
import { useToastStore } from '#/store/toastStore'
import { Loading } from '#/components/loading'

const ProtectedRoute = () => {
  const { uuid } = useParams()
  const navigate = useNavigate()
  const { showToast } = useToastStore()

  const { isPending, error, isExpired } = useInboxStatus(uuid || '')

  useEffect(() => {
    if (!uuid) {
      showToast('존재하지 않는 우체통입니다.', 'error')
      navigate('/', { replace: true })
    }
  }, [uuid, navigate])

  useEffect(() => {
    if (error) {
      showToast('존재하지 않는 우체통입니다.', 'error')
      navigate('/', { replace: true })
    }
  }, [error, navigate])

  useEffect(() => {
    if (isExpired) {
      showToast('해당 우체통은 만료되었습니다.', 'error')
      navigate('/', { replace: true })
    }
  }, [isExpired, navigate])

  if (isPending) return <Loading />

  return <Outlet />
}

export default ProtectedRoute
