import { authApiClient } from '#/api/apiClient'
import { API_ENDPOINTS } from '#/api/apiEndpoints'
import { LetterResponse } from '#/types/LetterInfo'

export const letter = async (uuid: string, letterId: number): Promise<LetterResponse> => {
  try {
    const res = await authApiClient.get<LetterResponse>(API_ENDPOINTS.GET_LETTER(uuid, letterId))
    return res.data
  } catch (error) {
    throw error
  }
}
