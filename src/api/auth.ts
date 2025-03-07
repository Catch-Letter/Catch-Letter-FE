import { apiClient } from '#/api/apiClient'
import { API_ENDPOINTS } from '#/api/apiEndpoints'

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
