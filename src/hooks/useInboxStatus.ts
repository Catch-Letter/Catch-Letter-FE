import { fetchUUID } from '#/api/uuid'
import { useQuery } from '@tanstack/react-query'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

export default function useInboxStatus(uuid: string) {
  const { data, isPending, error } = useQuery({
    queryKey: ['inbox-status', uuid],
    queryFn: () => fetchUUID(uuid),
  })

  if (!data) {
    return {
      // 초기값
      isExpired: false,
      isPending,
      error,
      time_left: '23:59:59',
      incorrect_letter_count: 0,
      total_letter_count: 0,
      name: '',
    }
  }

  const { expired_at, incorrect_letter_count, total_letter_count, name } = data

  const isExpired = expired_at === null || dayjs().isAfter(expired_at)

  const time_left = dayjs(dayjs(expired_at).diff(dayjs())).utc().format('HH:mm:ss')

  return {
    isExpired,
    isPending,
    error,
    time_left,
    incorrect_letter_count,
    total_letter_count,
    name,
  }
}
