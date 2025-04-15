import { apiClient } from '#/api/apiClient'
import { API_ENDPOINTS } from '#/api/apiEndpoints'

// 인증
export const fetchAuthToken = async (uuid: string, name: string, password: string) => {
  try {
    const res = await apiClient.post<Response>(
      API_ENDPOINTS.AUTH,
      { uuid, name, password },
      { withCredentials: true }
    )
    return res.data
  } catch (error) {
    throw error
  }
}

export interface AuthReqParams {
  uuid: string
  name: string
  password: string
}

interface Response {
  access_token: string
  token_type: 'bearer'
  expires_in: number
}
