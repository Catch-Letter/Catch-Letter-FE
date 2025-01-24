import React from 'react'
import { useTranslation } from 'react-i18next'
import { buttonStyle } from './LanguageSwitcher.styles'

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en_US' ? 'ko_KR' : 'en_US'
    i18n.changeLanguage(newLanguage)
  }

  return (
    <button css={buttonStyle} onClick={toggleLanguage}>
      한/영
    </button>
  )
}

export default LanguageSwitcher
