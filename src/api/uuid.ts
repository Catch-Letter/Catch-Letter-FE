import { apiClient } from '#/api/apiClient'
import { API_ENDPOINTS } from '#/api/apiEndpoints'

export const fetchUUID = async (uuid: string) => {
  try {
    const res = await apiClient.get(API_ENDPOINTS.INFO_UUID(uuid))
    return res.data
  } catch (error) {
    console.error(error)
  }
}
