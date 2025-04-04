import { getAnswer } from '#/api/getAnswer'
import { AnswerResponse } from '#/types/letterAnswer'
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'

const useGetAnswer = (uuid: string, letterId: number): UseQueryResult<AnswerResponse, Error> => {
  const options: UseQueryOptions<AnswerResponse, Error, AnswerResponse, [string, string, number]> =
    {
      queryKey: ['answer', uuid, letterId],
      queryFn: () => getAnswer(uuid, letterId),
      staleTime: Infinity,
      gcTime: 1000 * 60 * 30,
    }

  return useQuery(options)
}

export default useGetAnswer
