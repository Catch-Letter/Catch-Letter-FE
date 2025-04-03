import { fetchUUID } from '#/api/uuid'
import { useQuery } from '@tanstack/react-query'
import { dayjs } from '#/shared/api'

export default function useInboxStatus(uuid: string) {
  const { data, isPending, error } = useQuery({
    queryKey: ['inbox-status', uuid],
    queryFn: () => fetchUUID(uuid),
    retry: false,
  })

  if (!data) {
    return {
      // 초기값
      isExpired: false,
      isPending,
      error,
      expired_at: '2026-02-05T16:21:00.000000Z',
      incorrect_letter_count: 0,
      total_letter_count: 0,
      name: '',
      inboxUrl: '',
    }
  }

  const { expired_at, incorrect_letter_count, total_letter_count, name } = data

  const isExpired = expired_at === null || dayjs().isAfter(expired_at)

  return {
    isExpired,
    isPending,
    error,
    expired_at,
    incorrect_letter_count,
    total_letter_count,
    name,
    inboxUrl: `https://catchletter.kr/inbox/${uuid}`,
  }
}
