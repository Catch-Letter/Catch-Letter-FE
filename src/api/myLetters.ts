import { apiClient } from '#/api/apiClient'
import { API_ENDPOINTS } from '#/api/apiEndpoints'
import { LettersResponse } from '#/types/myLetters'
import { useInfiniteQuery } from '@tanstack/react-query'

const TOKEN = import.meta.env.VITE_API_TOKEN

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
    const res = await apiClient.get<LettersResponse>(API_ENDPOINTS.MY_LETTERS(uuid), {
      params: {
        per_page: perPage,
        cursor: cursor ?? undefined,
      },
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    })
    return res.data
  } catch (error) {
    console.error('그림 편지 조회 실패', error)
    throw error
  }
}

export const useMyLettersQuery = (uuid: string) => {
  return useInfiniteQuery<LettersResponse>({
    queryKey: ['myLetters', uuid],
    queryFn: ({ pageParam }) =>
      fetchMyLetters({
        cursor: typeof pageParam === 'string' ? pageParam : null,
        uuid,
      }),
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage?.next_cursor ?? null,
  })
}
