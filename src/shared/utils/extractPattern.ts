import { PatternType } from '#/types/letterStyle'

const validPatterns: PatternType[] = ['default', 'line', 'dot', 'grid']

export const extractPatternStyle = (etc: string | null | undefined): PatternType => {
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
