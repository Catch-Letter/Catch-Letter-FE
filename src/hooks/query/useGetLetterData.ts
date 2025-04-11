import { letter } from '#/api/letter'
import { useQuery } from '@tanstack/react-query'

interface UseGetLetterDataProps {
  uuid: string
  letterId: number
  enabled?: boolean
}

const useGetLetterData = ({ uuid, letterId, enabled = true }: UseGetLetterDataProps) => {
  return useQuery({
    queryKey: ['letter', uuid, letterId],
    queryFn: () => letter(uuid, letterId),
    staleTime: Infinity,
    gcTime: 1000 * 60 * 30,
    enabled,
    retry: (failureCount, error) => {
      if (error instanceof Error && error.name === 'NotFound') {
        return failureCount < 1
      }
      return failureCount < 3
    },
  })
}

export default useGetLetterData
