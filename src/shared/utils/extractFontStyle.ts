import { FontType } from '#/types/letterStyle'

const validFonts: FontType[] = ['NotoSansKR', 'NanumPen', 'Ownglyph']

export const extractFontStyle = (etc: string | null | undefined): FontType => {
  try {
    if (!etc) return 'NotoSansKR'

    const parsedEtc = JSON.parse(etc)
    const { font } = parsedEtc

    return validFonts.includes(font) ? font : 'NotoSansKR'
  } catch (error) {
    console.error('JSON 파싱 에러', error)
    return 'NotoSansKR'
  }
}
