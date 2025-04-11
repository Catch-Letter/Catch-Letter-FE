import { getAnswer } from '#/api/getAnswer'
import { useQuery } from '@tanstack/react-query'

const useGetAnswer = (uuid: string, letterId: number) => {
  return useQuery({
    queryKey: ['answer', uuid, letterId],
    queryFn: () => getAnswer(uuid, letterId),
    staleTime: Infinity,
    gcTime: 1000 * 60 * 30,
    retry: (failureCount, error) => {
      if (error instanceof Error && error.name === 'NotFound') {
        return failureCount < 1
      }
      return failureCount < 3
    },
  })
}

export default useGetAnswer
