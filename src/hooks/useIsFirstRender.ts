import { useEffect, useRef } from 'react'

const useIsFirstRender = () => {
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
    }
  })

  return { isFirstRender: isFirstRender.current }
}

export default useIsFirstRender
