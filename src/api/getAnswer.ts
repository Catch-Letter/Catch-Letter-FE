import { authApiClient } from '#/api/apiClient'
import { API_ENDPOINTS } from '#/api/apiEndpoints'
import { AnswerResponse } from '#/types/letterAnswer'

export const getAnswer = async (uuid: string, letterId: number): Promise<AnswerResponse> => {
  const res = await authApiClient.get<AnswerResponse>(API_ENDPOINTS.GET_ANSWER(uuid, letterId))
  return res.data
}
