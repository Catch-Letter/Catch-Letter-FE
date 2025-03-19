import { TFunction } from 'i18next'

export const answerValidate = (answer: string, t: TFunction): string => {
  const specialCharRegex = /[^a-zA-Z0-9가-힣]/

  if (answer.trim().length === 0) {
    return t('draw.invalidMessage1')
  }
  if (answer.trim().length > 8) {
    return t('draw.invalidMessage2')
  }
  if (specialCharRegex.test(answer)) {
    return t('draw.invalidMessage3')
  }
  return ''
}

export const isAnswerInvalid = (answer: string): boolean => {
  return answer.trim().length === 0 || answer.trim().length > 8 || /[^a-zA-Z0-9가-힣]/.test(answer)
}
