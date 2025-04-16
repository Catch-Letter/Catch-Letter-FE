import { authApiClient } from '#/api/apiClient'
import { API_ENDPOINTS } from '#/api/apiEndpoints'
import { useAuthStore } from '#/store/authStore'

export const refreshAuthToken = async (): Promise<void> => {
  try {
    const res = await authApiClient.post<RefreshResponse>(
      API_ENDPOINTS.REFRESH,
      {},
      { withCredentials: true }
    )

    const { setAccessToken } = useAuthStore.getState()
    setAccessToken(res.data.access_token)
  } catch (error) {
    const { deleteAccessToken } = useAuthStore.getState()
    deleteAccessToken()
    throw error
  }
}

interface RefreshResponse {
  access_token: string
  token_type: 'bearer'
  expires_in: number
}
