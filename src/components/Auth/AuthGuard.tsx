import { useIsFirstRender } from '#/hooks'
import { useAuthStore } from '#/store/authStore'
import { useToastStore } from '#/store/toastStore'
import { Navigate, Outlet, useParams } from 'react-router'

// access token을 통해 신원을 조회하고 접근한 경로 uuid와의 일치여부를 확인합니다.
const AuthGuard = () => {
  const { uuid } = useParams()
  const { accessToken, deleteAccessToken } = useAuthStore()
  const { showToast } = useToastStore()
  const { isFirstRender } = useIsFirstRender()

  // token이 없는 경우
  if (!accessToken) {
    return goToLoginWithToast('인증이 필요합니다.')
  }

  function goToLoginWithToast(message: string) {
    if (isFirstRender) {
      showToast(message, 'error')
      deleteAccessToken()
    }

    return <Navigate to={`/inbox/${uuid}`} replace />
  }

  return <Outlet />
}

export default AuthGuard
