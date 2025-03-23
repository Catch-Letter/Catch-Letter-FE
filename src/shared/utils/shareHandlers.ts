const KAKAO_KEY = import.meta.env.VITE_KAKAO_KEY
const KAKAO_ID = import.meta.env.VITE_KAKAO_TEMPLATE_KEY

export const shareHandlers = (shareUrl: string): Record<string, () => void> => ({
  Kakao: () => {
    const baseUrlPattern = /^https?:\/\/localhost:5173\//
    const baseUrl = shareUrl.replace(baseUrlPattern, '')

    if (!window.Kakao) {
      return
    }

    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(KAKAO_KEY)
    }

    if (window.Kakao.Share && window.Kakao.Share.sendScrap) {
      window.Kakao.Share.sendCustom({
        templateArgs: {
          url: baseUrl,
        },
        templateId: Number(KAKAO_ID),
        installTalk: true, // 카카오톡 미설치 시 설치페이지로 이동
      })
    }
  },
  X: () => {
    const text = '그림 퀴즈를 만들고 편지를 작성해봐! 🎨💌'
    window.open('https://www.x.com/intent/tweet?text=' + shareUrl + '\n' + text)
  },
  Facebook: () => {
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + shareUrl)
  },
  LINE: () => {},
})
