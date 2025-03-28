import { getAnswerStatus } from '#/api/getAnswerStatus'
import { useQuery } from '@tanstack/react-query'

const useGetAnswerStatus = (uuid: string, letterId: number) => {
  return useQuery({
    queryKey: ['getAnswerStatus', uuid, letterId],
    queryFn: () => getAnswerStatus(uuid, letterId),
  })
}

export default useGetAnswerStatus
