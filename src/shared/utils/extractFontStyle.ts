const validFonts = ['NotoSansKR', 'NanumPen', 'Ownglyph'] as const

export type ValidFont = (typeof validFonts)[number]

export const extractFontStyle = (etc: string | null | undefined): ValidFont => {
  try {
    if (!etc) return 'NotoSansKR' // 기본 폰트 설정

    const parsedEtc = JSON.parse(etc)
    const { font } = parsedEtc

    return validFonts.includes(font) ? font : 'NotoSansKR'
  } catch (error) {
    console.error('JSON 파싱 에러', error)
    return 'NotoSansKR'
  }
}
