import { getDraw } from '#/api/getDraw'
import { useQuery } from '@tanstack/react-query'

const useGetDrawData = (uuid: string, letterId: number) => {
  return useQuery({
    queryKey: ['getDrawData', uuid, letterId],
    queryFn: () => getDraw(uuid, letterId),
  })
}

export default useGetDrawData
