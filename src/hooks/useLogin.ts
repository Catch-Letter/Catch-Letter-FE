import { AuthReqParams, fetchAuthToken } from '#/api/auth'
import { useAuthStore } from '#/store/authStore'
import { useMutation } from '@tanstack/react-query'

interface Params {
  onAuthSuccess?: () => void
  onAuthFail?: () => void
}

export default function useLogin({ onAuthSuccess, onAuthFail }: Params) {
  const { setAccessToken, setExpiresIn } = useAuthStore()

  const { mutate: login } = useMutation({
    mutationFn: ({ uuid, name, password }: AuthReqParams) => fetchAuthToken(uuid, name, password),
    onSuccess: ({ access_token, expires_in }) => {
      onAuthSuccess?.()
      setAccessToken(access_token)
      setExpiresIn(expires_in)
    },
    onError: onAuthFail,
  })

  return {
    login,
  }
}
