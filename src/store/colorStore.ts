import { create } from 'zustand'

export type ColorType = 'grey' | 'pink' | 'violet' | 'green' | 'blue'
export type PatternType = 'default' | 'dot' | 'line' | 'grid'

interface ColorStore {
  selectedColor: ColorType
  setSelectedColor: (color: ColorType) => void
}

interface PatternStore {
  selectedPattern: PatternType
  setSelectedPattern: (pattern: PatternType) => void
}
export const useColorStore = create<ColorStore>((set) => ({
  selectedColor: 'grey',
  setSelectedColor: (color) => set({ selectedColor: color }),
}))

export const usePatternStore = create<PatternStore>((set) => ({
  selectedPattern: 'default',
  setSelectedPattern: (pattern) => set({ selectedPattern: pattern }),
}))
