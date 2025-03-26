import { colors } from '#/styles/color'

// 편지 etc 데이터 바탕 배경 색 추출
export const extractColor = (etc: string | null | undefined) => {
  try {
    if (!etc) return colors.grey[9]

    const parsedEtc = JSON.parse(etc)
    const color = parsedEtc.color ?? 'grey'

    switch (color) {
      case 'green':
        return colors.green[6]
      case 'blue':
        return colors.blue[600]
      case 'pink':
        return colors.pink[6]
      case 'violet':
        return colors.violet[6]
      case 'grey':
      default:
        return colors.grey[9]
    }
  } catch (error) {
    console.error('JSON 파싱 애러', error)
    return colors.grey[11]
  }
}
