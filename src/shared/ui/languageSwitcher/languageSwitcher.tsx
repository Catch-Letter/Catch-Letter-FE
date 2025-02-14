import { useSwitchLangAttribute } from '#/app/model'
import { useTranslation } from 'react-i18next'
import { buttonStyle } from './LanguageSwitcher.styles'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()
  const isKorean = i18n.language === 'ko_KR'
  useSwitchLangAttribute(i18n.language)

  const toggleLanguage = () => {
    const newLanguage = isKorean ? 'en_US' : 'ko_KR'
    i18n.changeLanguage(newLanguage)
  }

  return (
    <button css={buttonStyle(isKorean)} onClick={toggleLanguage}>
      <span>한</span>/<span>영</span>
    </button>
  )
}

export default LanguageSwitcher
