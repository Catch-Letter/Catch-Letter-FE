import { authApiClient } from '#/api/apiClient'
import { API_ENDPOINTS } from '#/api/apiEndpoints'

export const getAnswerStatus = async (uuid: string, letterId: number) => {
  try {
    const res = await authApiClient(API_ENDPOINTS.GET_ANSWER_STATUS(uuid, letterId))
    return res.data
  } catch (error) {
    console.error('Error in getAnswerStatus:', error)
    throw error
  }
}
