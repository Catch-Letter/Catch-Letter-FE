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
    return colors.grey[11]
  }
}

export const extractColorToString = (etc: string | null | undefined) => {
  try {
    if (!etc) return 'grey'
    const parsedEtc = JSON.parse(etc)
    const validColors = ['green', 'blue', 'pink', 'violet', 'grey']
    return validColors.includes(parsedEtc.color) ? parsedEtc.color : 'grey'
  } catch (error) {
    return 'grey'
  }
}
