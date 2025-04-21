import { create } from 'zustand'

import { ColorType, FontType, PatternType } from '#/types/letterStyle'

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
