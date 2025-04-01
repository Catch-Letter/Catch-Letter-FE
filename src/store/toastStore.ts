import { create } from 'zustand'

interface Toast {
  message: string
  type: 'success' | 'error'
  location?: 'page' | 'modal'
}

interface ToastState {
  toast: Toast | null
  showToast: (message: string, type: 'success' | 'error', location?: 'page' | 'modal') => void
  removeToast: () => void
}

export const useToastStore = create<ToastState>((set) => ({
  toast: null,
  showToast: (message, type, location = 'page') => {
    set({ toast: { message, type, location } })
    setTimeout(() => {
      set({ toast: null })
    }, 2000)
  },
  removeToast: () => set({ toast: null }),
}))
