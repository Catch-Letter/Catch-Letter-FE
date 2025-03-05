import { apiClient } from '#/api/apiClient'
import { API_ENDPOINTS } from '#/api/apiEndpoints'
import { LettersResponse } from '#/types/myLetters'

const TOKEN = import.meta.env.VITE_API_TOKEN

export const fetchMyLetters = async (
  uuid: string,
  perPage: number = 15
): Promise<LettersResponse> => {
  try {
    const res = await apiClient.get<LettersResponse>(API_ENDPOINTS.MY_LETTERS(uuid), {
      params: { per_page: perPage },
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    })
    console.log('그림 편지 조회 성공', res)
    return res.data
  } catch (error) {
    console.log('그림 편지 조회 실패', error)
    throw error
  }
}
