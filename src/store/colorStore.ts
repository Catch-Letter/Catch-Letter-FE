import { create } from 'zustand'

type ColorType = 'grey' | 'pink' | 'violet' | 'green' | 'blue'

interface ColorStore {
  selectedColor: ColorType
  setSelectedColor: (color: ColorType) => void
}

export const useColorStore = create<ColorStore>((set) => ({
  selectedColor: 'grey',
  setSelectedColor: (color) => set({ selectedColor: color }),
}))
