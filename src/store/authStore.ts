import { create } from 'zustand'
interface AuthStore {
  accessToken: string
  deleteAccessToken: () => void
  setAccessToken: (accessToken: string) => void
}

export const useAuthStore = create<AuthStore>((set) => ({
  accessToken: '',
  deleteAccessToken: () => set({ accessToken: '' }),
  setAccessToken: (accessToken) => set({ accessToken }),
}))
