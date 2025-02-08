import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import usTranslations from '../translations/en_US.json'
import krTranslations from '../translations/ko_KR.json'

const resources = {
  en_US: {
    translation: usTranslations,
  },
  ko_KR: {
    translation: krTranslations,
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ko_KR',
    fallbackLng: 'ko_KR',
    debug: true,
    interpolation: { escapeValue: false },
  })

export default i18n
