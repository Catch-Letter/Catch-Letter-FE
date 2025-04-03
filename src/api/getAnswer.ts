import { authApiClient } from '#/api/apiClient'
import { API_ENDPOINTS } from '#/api/apiEndpoints'

export const getAnswer = async (uuid: string, letterId: number) => {
  try {
    const res = await authApiClient.get(API_ENDPOINTS.GET_ANSWER(uuid, letterId))
    return res.data
  } catch (error) {
    throw error
  }
}
