import { getAnswer } from '#/api/getAnswer'
import { useQuery } from '@tanstack/react-query'

const useGetAnswer = (uuid: string, letterId: number) => {
  return useQuery({
    queryKey: ['answer', uuid, letterId],
    queryFn: () => getAnswer(uuid, letterId),
    staleTime: Infinity,
    gcTime: 1000 * 60 * 30,
  })
}

export default useGetAnswer
