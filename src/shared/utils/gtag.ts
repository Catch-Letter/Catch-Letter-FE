export const GA_ID = import.meta.env.VITE_GA_ID

interface GAEventParams {
  action: string
  category: string
  label: string
  value?: number
}

export const pageview = (path: string) => {
  if (!GA_ID || typeof window === 'undefined') return
  window.gtag('config', GA_ID, {
    page_path: path,
  })
}

export const event = ({ action, category, label, value }: GAEventParams) => {
  if (!GA_ID || typeof window === 'undefined') return
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  })
}
