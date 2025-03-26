import { authApiClient } from '#/api/apiClient'
import { API_ENDPOINTS } from '#/api/apiEndpoints'

export const refreshAuthToken = async () => {
  try {
    const res = await authApiClient.post<Response>(API_ENDPOINTS.REFRESH)
    return res.data
  } catch (error) {
    throw error
  }
}

interface Response {
  access_token: string
  token_type: 'bearer'
  expires_in: number
}
