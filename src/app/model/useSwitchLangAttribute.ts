import { useEffect } from 'react'

const useSwitchLangAttribute = (language: string) => {
  useEffect(() => {
    document.documentElement.lang = language
  }, [language])
}

export default useSwitchLangAttribute
