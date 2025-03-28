import { useEffect, useState } from 'react'
import { fetchUUID } from '#/api/uuid'

export const useTotalLetterCount = (uuid?: string) => {
  const [letterCount, setLetterCount] = useState<number | null>(null)

  useEffect(() => {
    const fetchCount = async () => {
      if (!uuid) return
      try {
        const res = await fetchUUID(uuid)
        setLetterCount(res.total_letter_count)
      } catch (error) {
        console.error(error)
      }
    }

    fetchCount()
  }, [uuid])

  return letterCount
}
