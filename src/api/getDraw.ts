import { authApiClient } from '#/api/apiClient'
import { API_ENDPOINTS } from '#/api/apiEndpoints'

export const getDraw = async (uuid: string, letterId: number) => {
  try {
    const res = await authApiClient.get(API_ENDPOINTS.GET_DRAW(uuid, letterId))
    return res.data
  } catch (error) {
    console.error('Error in letter:', error)
    throw error
  }
}
