import { apiClient } from '#/api/apiClient'
import { API_ENDPOINTS } from '#/api/apiEndpoints'

export const postTryAnswer = async (uuid: string, letterId: number, answer: string) => {
  try {
    const res = await apiClient.post(API_ENDPOINTS.TRY_ANSWER(uuid, letterId), {
      answer,
    })

    if (res.data?.result === 'success') {
      return {
        success: true,
        message: res.data?.message ?? '정답입니다!',
      }
    } else if (res.data?.result === 'fail') {
      return {
        success: false,
        message: res.data?.message ?? '틀렸습니다. 다시 시도하세요!',
        remainingAttempts: res.data?.data?.try ?? 0,
        hints: res.data?.data?.hints ?? [],
      }
    }
  } catch (error) {
    console.error('Error in postTryAnswer:', error)
    return {
      success: false,
      message: '서버 오류가 발생했습니다. 다시 시도해주세요.',
    }
  }
}
