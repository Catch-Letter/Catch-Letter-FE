import { authApiClient } from '#/api/apiClient'
import { API_ENDPOINTS } from '#/api/apiEndpoints'
import { useAuthStore } from '#/store/authStore'
import { LettersResponse } from '#/types/myLetters'
import { useInfiniteQuery } from '@tanstack/react-query'

export const fetchMyLetters = async ({
  cursor,
  uuid,
  perPage = 15,
}: {
  cursor?: string | null
  uuid: string
  perPage?: number
}) => {
  try {
    const res = await authApiClient.get<LettersResponse>(API_ENDPOINTS.MY_LETTERS(uuid), {
      params: {
        per_page: perPage,
        cursor: cursor ?? undefined,
      },
    })
    return res.data
  } catch (error) {
    console.error('그림 편지 조회 실패', error)
    throw error
  }
}

export const useMyLettersQuery = (uuid: string) => {
  const { accessToken } = useAuthStore()

  return useInfiniteQuery<LettersResponse>({
    queryKey: ['myLetters', uuid],
    queryFn: ({ pageParam }) =>
      fetchMyLetters({
        cursor: typeof pageParam === 'string' ? pageParam : null,
        uuid,
      }),
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage?.next_cursor ?? null,
    enabled: !!accessToken,
  })
}
