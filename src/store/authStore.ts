import { create } from 'zustand'
interface AuthStore {
  accessToken: string
  expiresIn: number
  setAccessToken: (accessToken: string) => void
  setExpiresIn: (expiresIn: number) => void
}

export const useAuthStore = create<AuthStore>((set) => ({
  accessToken: '',
  expiresIn: 0,
  setAccessToken: (accessToken) => set({ accessToken }),
  setExpiresIn: (expiresIn) => set({ expiresIn }),
}))
