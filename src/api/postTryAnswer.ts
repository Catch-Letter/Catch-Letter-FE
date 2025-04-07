import { authApiClient } from '#/api/apiClient'
import { API_ENDPOINTS } from '#/api/apiEndpoints'
import { TryAnswerResponse } from '#/types/tryAnswer'

export const postTryAnswer = async (
  uuid: string,
  letterId: number,
  answer: string
): Promise<TryAnswerResponse> => {
  try {
    const res = await authApiClient.post(API_ENDPOINTS.TRY_ANSWER(uuid, letterId), { answer })

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
        remaining_seconds: res.data?.data?.remaining_seconds ?? 0,
      }
    }
    return {
      success: false,
      message: '응답이 예상과 다릅니다.',
    }
  } catch (error) {
    return {
      success: false,
      message: '서버 오류가 발생했습니다. 다시 시도해주세요.',
    }
  }
}
