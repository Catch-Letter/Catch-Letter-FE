import React from 'react'
import { useTranslation } from 'react-i18next'
import { buttonStyle } from './LanguageSwitcher.styles'

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation()
  const isKorean = i18n.language === 'ko_KR'

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en_US' ? 'ko_KR' : 'en_US'
    i18n.changeLanguage(newLanguage)
  }

  return (
    <button css={buttonStyle(isKorean)} onClick={toggleLanguage}>
      <span>한</span>/<span>영</span>
    </button>
  )
}

export default LanguageSwitcher
