import { create } from 'zustand'

interface Toast {
  id: string
  message: string
  type: 'success' | 'error'
}

interface ToastState {
  toasts: Toast[]
  showToast: (message: string, type: 'success' | 'error') => void
  removeToast: (id: string) => void
}

export const useToastStore = create<ToastState>((set, get) => ({
  toasts: [],
  showToast: (message: string, type: 'success' | 'error') => {
    const id = new Date().toString()
    set((state) => ({
      toasts: [...state.toasts, { id, message, type }],
    }))
    setTimeout(() => {
      get().removeToast(id)
    }, 3000)
  },
  removeToast: (id: string) => {
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    }))
  },
}))
