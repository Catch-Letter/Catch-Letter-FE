import { create } from 'zustand'

export type ColorType = 'grey' | 'pink' | 'violet' | 'green' | 'blue'
export type PatternType = 'default' | 'dot' | 'line' | 'grid'
export type FontType = 'default' | 'ownglyph' | 'nanum'

interface LetterCreationStore {
  selectedColor: ColorType
  selectedPattern: PatternType
  selectedFont: FontType
  setSelectedColor: (color: ColorType) => void
  setSelectedPattern: (pattern: PatternType) => void
  setSelectedFont: (font: FontType) => void
  resetStore: () => void
}

export const useLetterCreationStore = create<LetterCreationStore>((set) => ({
  selectedColor: 'grey',
  selectedPattern: 'default',
  selectedFont: 'default',
  setSelectedColor: (color) => set({ selectedColor: color }),
  setSelectedPattern: (pattern) => set({ selectedPattern: pattern }),
  setSelectedFont: (font) => set({ selectedFont: font }),
  resetStore: () =>
    set({ selectedColor: 'grey', selectedPattern: 'default', selectedFont: 'default' }),
}))
