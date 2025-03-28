const validPatterns = ['default', 'line', 'dot', 'grid'] as const

export type ValidPattern = (typeof validPatterns)[number]

export const extractPatternStyle = (etc: string | null | undefined): ValidPattern => {
  try {
    if (!etc) return 'default'

    const parsedEtc = JSON.parse(etc)
    const { pattern } = parsedEtc

    return validPatterns.includes(pattern) ? pattern : 'default'
  } catch (error) {
    console.error('JSON 파싱 에러', error)
    return 'default'
  }
}
