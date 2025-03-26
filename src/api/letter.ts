import { authApiClient } from '#/api/apiClient'
import { API_ENDPOINTS } from '#/api/apiEndpoints'

export const letter = async (uuid: string, letterId: number) => {
  try {
    const res = await authApiClient.get(API_ENDPOINTS.GET_LETTER(uuid, letterId))
    return res.data
  } catch (error) {
    console.error('Error in letter:', error)
    throw error
  }
}
