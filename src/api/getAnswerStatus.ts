import { apiClient } from '#/api/apiClient'
import { API_ENDPOINTS } from '#/api/apiEndpoints'

const TOKEN = import.meta.env.VITE_API_TOKEN

export const getAnswerStatus = async (uuid: string, letterId: number) => {
  try {
    const res = await apiClient.get(API_ENDPOINTS.GET_ANSWER_STATUS(uuid, letterId), {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    })
    return res.data
  } catch (error) {
    console.error('Error in getAnswerStatus:', error)
    throw error
  }
}
