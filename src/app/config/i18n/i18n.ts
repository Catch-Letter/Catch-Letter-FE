import { LANGUAGE } from '#/shared/config'
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import { krTranslations, usTranslations } from './translations'

const resources = {
  [LANGUAGE.EN]: {
    translation: usTranslations,
  },
  [LANGUAGE.KO]: {
    translation: krTranslations,
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: LANGUAGE.KO,
    fallbackLng: LANGUAGE.KO,
    debug: true,
    interpolation: { escapeValue: false },
  })

export default i18n
