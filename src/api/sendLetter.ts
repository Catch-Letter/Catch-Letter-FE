import { apiClient } from '#/api/apiClient'
import { API_ENDPOINTS } from '#/api/apiEndpoints'
import { LetterInfo } from '#/types/LetterInfo'

export const fetchSendLetter = async (uuid: string, id: number, letter: LetterInfo) => {
  try {
    const res = await apiClient.post(API_ENDPOINTS.SEND_LETTER(uuid, id), {
      to: letter.to,
      from: letter.from,
      contents: letter.contents,
      etc: letter.etc,
    })
    return res.data
  } catch (error) {
    throw error
  }
}
