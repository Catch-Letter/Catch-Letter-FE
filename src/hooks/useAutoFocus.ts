import { RefObject, useEffect } from 'react'

const useAutoFocus = (
  autoFocus: boolean,
  inputRefs: RefObject<(HTMLInputElement | null)[] | HTMLInputElement>
) => {
  useEffect(() => {
    // 화면에 보이는 순간 비어 있는 첫째 input에 focus
    if (!autoFocus || !inputRefs.current) return

    // 단일 input
    if (!Array.isArray(inputRefs.current)) {
      inputRefs.current.focus()
      return
    }

    for (const input of inputRefs.current) {
      if (input && input.value === '') {
        input.focus()
        break
      }
    }
  }, [])
}

export default useAutoFocus
