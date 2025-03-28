import { letter } from '#/api/letter'
import { useQuery } from '@tanstack/react-query'

const useGetLetterData = (uuid: string, letterId: number) => {
  return useQuery({
    queryKey: ['letter', uuid, letterId],
    queryFn: () => letter(uuid, letterId),
  })
}

export default useGetLetterData
