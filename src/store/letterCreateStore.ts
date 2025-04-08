import { create } from 'zustand'

export type ColorType = 'grey' | 'pink' | 'violet' | 'green' | 'blue'
export type PatternType = 'default' | 'dot' | 'line' | 'grid'
export type FontType = 'NotoSansKR' | 'Ownglyph' | 'NanumPen'

interface LetterCreationStore {
  receiver: string
  selectedColor: ColorType
  selectedPattern: PatternType
  selectedFont: FontType
  setReceiver: (receiver: string) => void
  setSelectedColor: (color: ColorType) => void
  setSelectedPattern: (pattern: PatternType) => void
  setSelectedFont: (font: FontType) => void
  resetStore: () => void
}

export const useLetterCreationStore = create<LetterCreationStore>((set) => ({
  receiver: localStorage.getItem('receiver') || '',
  selectedColor: 'grey',
  selectedPattern: 'default',
  selectedFont: 'NotoSansKR',
  setReceiver: (receiver) => {
    localStorage.setItem('receiver', receiver)
    set({ receiver })
  },
  setSelectedColor: (color) => set({ selectedColor: color }),
  setSelectedPattern: (pattern) => set({ selectedPattern: pattern }),
  setSelectedFont: (font) => set({ selectedFont: font }),
  resetStore: () => {
    localStorage.removeItem('receiver')
    set({
      selectedColor: 'grey',
      selectedPattern: 'default',
      selectedFont: 'NotoSansKR',
      receiver: '',
    })
  },
}))
