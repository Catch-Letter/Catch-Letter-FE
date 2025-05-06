export {}

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    Kakao: any
    liff: any
  }
}
