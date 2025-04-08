import { getPostInfo } from '#/api'
import { AuthError } from '#/app/Errors'
import { useIsFirstRender } from '#/hooks'
import { useAuthStore } from '#/store/authStore'
import { useToastStore } from '#/store/toastStore'
import { useSuspenseQuery } from '@tanstack/react-query'
import { Navigate, Outlet, useParams } from 'react-router'

// access token을 통해 신원을 조회하고 접근한 경로 uuid와의 일치여부를 확인합니다.
const AuthGuard = () => {
  const { uuid } = useParams()
  const { accessToken } = useAuthStore()
  const { showToast } = useToastStore()
  const { isFirstRender } = useIsFirstRender()

  // token이 없는 경우
  if (!accessToken) {
    goToLoginWithToast('인증이 필요합니다.')
  }

  const { data, error } = useSuspenseQuery({
    queryKey: ['Auth', accessToken],
    queryFn: getPostInfo,
  })

  // 유효하지 않은 토큰으로 private 경로에 접근하는 경우
  if (error instanceof AuthError) {
    if (error) console.log('hi', error)

    goToLoginWithToast('인증 정보가 옳바르지 않습니다.')
  } else if (error) {
    // 인증 관련 에러가 아닌 경우 ErrorBoundary로 넘김
    throw error
  }

  // 다른 계정의 만료된 토큰으로 private 경로로 접근하는 경우
  if (data.uuid !== uuid) {
    goToLoginWithToast('인증 정보가 옳바르지 않습니다.')
  }

  function goToLoginWithToast(message: string) {
    if (isFirstRender) {
      showToast(message, 'error')
    }

    return <Navigate to={`/inbox/${uuid}`} replace />
  }

  return <Outlet />
}

export default AuthGuard
