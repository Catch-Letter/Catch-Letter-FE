import { letter } from '#/api/letter'
import { LetterResponse } from '#/types/LetterInfo'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'

const useGetLetterData = (uuid: string, letterId: number) => {
  return useQuery({
    queryKey: ['letter', uuid, letterId],
    queryFn: () => letter(uuid, letterId),
    staleTime: Infinity,
    gcTime: 1000 * 60 * 30,
  } as UseQueryOptions<LetterResponse, Error, LetterResponse, [string, string, number]>)
}

export default useGetLetterData
