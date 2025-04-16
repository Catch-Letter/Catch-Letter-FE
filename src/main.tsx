import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import GlobalStyles from './styles/GlobalStyles.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import * as Sentry from '@sentry/react'
import { browserTracingIntegration } from '@sentry/react'

declare global {
  interface Window {
    Kakao: any
    liff: any
  }
}

const queryClient = new QueryClient()

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  integrations: [browserTracingIntegration()],
  tracesSampleRate: 1.0,
  enabled: import.meta.env.PROD,
})

if (import.meta.env.PROD) {
  const script1 = document.createElement('script')
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${import.meta.env.VITE_GA_ID}`
  script1.async = true
  document.head.appendChild(script1)

  const script2 = document.createElement('script')
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${import.meta.env.VITE_GA_ID}');
  `
  document.head.appendChild(script2)
}

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <GlobalStyles />
    <App />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
)
