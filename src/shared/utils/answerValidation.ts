import { TFunction } from 'i18next'

export const answerValidate = (answer: string, t: TFunction): string => {
  const specialCharRegex = /[^a-zA-Z0-9가-힣]/
  const consonantRegex = /[ㄱ-ㅎ]/
  const vowelRegex = /[ㅏ-ㅣ]/

  // 입력을 하지 않았을 경우
  if (answer.trim().length === 0) {
    return t('draw.invalidMessage1')
  }

  // 8글자가 넘어간 경우
  if (answer.trim().length > 8) {
    return t('draw.invalidMessage2')
  }

  // 자음 또는 모음이 하나라도 포함될 경우
  if (consonantRegex.test(answer) || vowelRegex.test(answer)) {
    return t('draw.invalidMessage4')
  }

  // 특수문자, 이모티콘 및 띄어쓰기를 사용한 경우
  if (specialCharRegex.test(answer) && !/^[가-힣]+$/.test(answer)) {
    return t('draw.invalidMessage3')
  }

  return ''
}

export const isAnswerInvalid = (answer: string): boolean => {
  const consonantRegex = /[ㄱ-ㅎ]/
  const vowelRegex = /[ㅏ-ㅣ]/

  return (
    answer.trim().length === 0 ||
    answer.trim().length > 8 ||
    (/[^a-zA-Z0-9가-힣]/.test(answer) && !/^[가-힣]+$/.test(answer)) ||
    consonantRegex.test(answer) ||
    vowelRegex.test(answer)
  )
}
