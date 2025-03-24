import { apiClient } from '#/api/apiClient'
import { API_ENDPOINTS } from '#/api/apiEndpoints'
import { useAuthStore } from '#/store/authStore'

export const getDraw = async (uuid: string, letterId: number) => {
  const { accessToken } = useAuthStore.getState()

  try {
    const res = await apiClient.get(API_ENDPOINTS.GET_DRAW(uuid, letterId), {
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
