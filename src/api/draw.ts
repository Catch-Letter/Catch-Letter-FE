import { apiClient } from '#/api/apiClient'
import { API_ENDPOINTS } from '#/api/apiEndpoints'

export const requestDrawUpload = async (uuid: string, answer: string) => {
  try {
    const res = await apiClient.post(API_ENDPOINTS.DRAW(uuid), { answer })
    return res.data.data
  } catch (error) {
    console.log('그림 업로드 실패', error)
    throw error
  }
}
