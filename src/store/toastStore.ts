import { create } from 'zustand'

interface Toast {
  message: string
  type: 'success' | 'error'
}

interface ToastState {
  toast: Toast | null
  showToast: (message: string, type: 'success' | 'error') => void
  removeToast: () => void
}

export const useToastStore = create<ToastState>((set) => ({
  toast: null,
  showToast: (message, type) => {
    set({ toast: { message, type } })
    setTimeout(() => {
      set({ toast: null })
    }, 2000)
  },
  removeToast: () => set({ toast: null }),
}))
