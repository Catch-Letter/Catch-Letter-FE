import { apiClient } from '#/api/apiClient'
import { API_ENDPOINTS } from '#/api/apiEndpoints'

// 우체통 생성
export const submitCreatePost = async (name: string, password: string) => {
  try {
    const res = await apiClient.post<{ data: { uuid: string; expired_at: string } }>(
      API_ENDPOINTS.CREATE,
      { name, password }
    )
    return res.data
  } catch (error) {
    console.error(error)
  }
}

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
