import { ColorType } from '#/types/letterStyle'

const validColor: ColorType[] = ['grey', 'pink', 'violet', 'green', 'blue']
export const extractColorStyle = (etc: string | null | undefined): ColorType => {
  try {
    if (!etc) return 'grey'

    const parsedEtc = JSON.parse(etc)
    const { color } = parsedEtc

    return validColor.includes(color) ? color : 'grey'
  } catch {
    return 'grey'
  }
}
