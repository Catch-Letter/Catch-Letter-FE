import { apiClient } from '#/api/apiClient'
import { API_ENDPOINTS } from '#/api/apiEndpoints'

const TOKEN = import.meta.env.VITE_API_TOKEN

export const letter = async (uuid: string, letterId: number) => {
  try {
    const res = await apiClient.get(API_ENDPOINTS.GET_LETTER(uuid, letterId), {
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
