import { apiClient } from '#/api/apiClient'
import { API_ENDPOINTS } from '#/api/apiEndpoints'

// 인증
export const fetchAuthToken = async (name: string, password: string, uuid: string) => {
  try {
    const res = await apiClient.post<{
      data: { access_token: string; token_type: string; expires_in: number }
    }>(API_ENDPOINTS.AUTH, { uuid, name, password })
    return res.data
  } catch (error) {
    console.log('인증 에러', error)
  }
}
