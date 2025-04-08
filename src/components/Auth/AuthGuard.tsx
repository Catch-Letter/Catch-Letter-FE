import { getPostInfo } from '#/api'
import { AuthError } from '#/app/Errors'
import { useIsFirstRender } from '#/hooks'
import { useAuthStore } from '#/store/authStore'
import { useToastStore } from '#/store/toastStore'
import { useSuspenseQuery } from '@tanstack/react-query'
import { Navigate, Outlet, useParams } from 'react-router'

const AuthGuard = () => {
  const { uuid } = useParams()
  const { accessToken } = useAuthStore()
  const { showToast } = useToastStore()
  const { isFirstRender } = useIsFirstRender()

  if (!accessToken) {
    if (isFirstRender) {
      console.log('pass')
      showToast('본인 인증이 필요합니다.', 'error')
    }
    return <Navigate to={`/inbox/${uuid}`} replace />
  }
  console.log('passed')

  const { data, error } = useSuspenseQuery({
    queryKey: ['Auth', accessToken],
    queryFn: getPostInfo,
  })

  if (error instanceof AuthError) {
    if (error) console.log(error)
    if (isFirstRender) {
      showToast('인증 정보가 옳바르지 않습니다.', 'error')
    }

    return <Navigate to={`/inbox/${uuid}`} replace />
  } else if (error) {
    // 인증 관련 에러가 아닌 경우 ErrorBoundary로 넘김
    throw error
  }

  return <Outlet />
}

export default AuthGuard
