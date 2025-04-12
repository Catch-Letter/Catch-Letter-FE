import { getAnswerStatus } from '#/api/getAnswerStatus'
import { useQuery } from '@tanstack/react-query'

const useGetAnswerStatus = (uuid: string, letterId: number) => {
  return useQuery({
    queryKey: ['getAnswerStatus', uuid, letterId],
    queryFn: () => getAnswerStatus(uuid, letterId),

    retry: (failureCount, error) => {
      if (error instanceof Error && error.name === 'NotFound') {
        return failureCount < 1
      }
      return failureCount < 3
    },
  })
}

export default useGetAnswerStatus
