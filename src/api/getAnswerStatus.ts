import { authApiClient } from '#/api/apiClient'
import { API_ENDPOINTS } from '#/api/apiEndpoints'
import axios from 'axios'

export const getAnswerStatus = async (uuid: string, letterId: number) => {
  try {
    const res = await authApiClient(API_ENDPOINTS.GET_ANSWER_STATUS(uuid, letterId))
    return res.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        throw new Error('NotFound')
      }
    }
    throw error
  }
}
