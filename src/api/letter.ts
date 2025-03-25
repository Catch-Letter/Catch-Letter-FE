import { apiClient } from '#/api/apiClient'
import { API_ENDPOINTS } from '#/api/apiEndpoints'
import { useAuthStore } from '#/store/authStore'

export const letter = async (uuid: string, letterId: number) => {
  const { accessToken } = useAuthStore.getState()
  try {
    const res = await apiClient.get(API_ENDPOINTS.GET_LETTER(uuid, letterId), {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    return res.data
  } catch (error) {
    console.error('Error in letter:', error)
    throw error
  }
}
