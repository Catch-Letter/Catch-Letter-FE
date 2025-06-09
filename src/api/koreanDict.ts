import axios from 'axios'
import { XMLParser } from 'fast-xml-parser'

const consonants = [
  '가',
  '나',
  '다',
  '라',
  '마',
  '바',
  '사',
  '아',
  '자',
  '차',
  '카',
  '타',
  '파',
  '하',
]
const randomQ = consonants[Math.floor(Math.random() * consonants.length)]
const API_KEY = import.meta.env.VITE_KOREAN_DICT_API_KEY

export const fetchRandomWord = async () => {
  try {
    const res = await axios.get('https://krdict.korean.go.kr/api/search', {
      params: {
        key: API_KEY,
        q: randomQ,
        num: 100,
        advanced: 'y',
        method: 'include',
        pos: 1,
        level: 'level1',
      },
    })

    const parser = new XMLParser()
    const result = parser.parse(res.data)
    const items = result.channel.item ?? ['강아지', '네잎클로버', '소오름', '토끼', '독감']

    if (Array.isArray(items) && items.length > 0) {
      const randomItem = items[Math.floor(Math.random() * items.length)]
      return randomItem.word
    }

    return null
  } catch (error) {
    throw error
  }
}
