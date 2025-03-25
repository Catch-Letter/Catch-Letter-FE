import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import GlobalStyles from './styles/GlobalStyles.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

declare global {
  interface Window {
    Kakao: any
    liff: any
  }
}

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <App />
    </QueryClientProvider>
  </StrictMode>
)
