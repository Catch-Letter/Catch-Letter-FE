import { useEffect, useState } from 'react'

export default function useObjectUrl(file: File) {
  const [url, setUrl] = useState<string | null>(null)

  useEffect(() => {
    if (file) {
      const objectUrl = URL.createObjectURL(file)
      setUrl(objectUrl)

      return () => URL.revokeObjectURL(objectUrl)
    }
  }, [file])

  return url
}
