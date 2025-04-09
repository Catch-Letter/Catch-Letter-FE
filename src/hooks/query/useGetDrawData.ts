import { getDraw } from '#/api/getDraw'
import { useQuery } from '@tanstack/react-query'

const useGetDrawData = (uuid: string, letterId: number) => {
  return useQuery({
    queryKey: ['getDrawData', uuid, letterId],
    queryFn: () => getDraw(uuid, letterId),
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

export default useGetDrawData
