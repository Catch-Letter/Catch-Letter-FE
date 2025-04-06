import { authApiClient } from '#/api/apiClient'
import { API_ENDPOINTS } from '#/api/apiEndpoints'

export const getPostInfo = async () => {
  try {
    const res = await authApiClient.post<Response>(API_ENDPOINTS.ME)
    return res.data
  } catch (error) {
    throw error
  }
}

interface Response {
  id: number
  uuid: string
  name: string
  created_at: string
  updated_at: string
  deleted_at: null | string
}
