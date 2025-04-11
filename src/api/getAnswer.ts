import { authApiClient } from '#/api/apiClient'
import { API_ENDPOINTS } from '#/api/apiEndpoints'
import { handleApiError } from '#/shared/utils/handleApiError'
import { AnswerResponse } from '#/types/letterAnswer'

export const getAnswer = async (uuid: string, letterId: number): Promise<AnswerResponse> => {
  try {
    const res = await authApiClient.get<AnswerResponse>(API_ENDPOINTS.GET_ANSWER(uuid, letterId))
    return res.data
  } catch (error) {
    handleApiError(error)
    throw error
  }
}
