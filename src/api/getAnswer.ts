import { apiClient } from '#/api/apiClient'
import { API_ENDPOINTS } from '#/api/apiEndpoints'

const TOKEN = import.meta.env.VITE_API_TOKEN

export const getAnswer = async (uuid: string, letterId: number) => {
  try {
    const res = await apiClient.get(API_ENDPOINTS.GET_ANSWER(uuid, letterId), {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    })
    return res.data
  } catch (error) {
    console.error('Error in letter:', error)
    throw error
  }
}
