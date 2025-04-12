import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface State {
  accessToken: string
}
interface Actions {
  deleteAccessToken: () => void
  setAccessToken: (accessToken: string) => void
}

export const useAuthStore = create<State & Actions>()(
  persist(
    (set) => ({
      accessToken: '',
      deleteAccessToken: () => set({ accessToken: '' }),
      setAccessToken: (accessToken) => set({ accessToken }),
    }),
    {
      name: 'auth',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
)
