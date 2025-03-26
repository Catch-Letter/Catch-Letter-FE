import { LANGUAGE } from '#/app/config'
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import { transformTranslations } from './transformTranslations'
import translations from './translations.json'

const resources = transformTranslations(translations)

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: LANGUAGE.KO,
    fallbackLng: LANGUAGE.KO,
    debug: false,
    interpolation: { escapeValue: false },
  })

export default i18n
