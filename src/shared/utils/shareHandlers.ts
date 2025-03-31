const KAKAO_KEY = import.meta.env.VITE_KAKAO_KEY
const KAKAO_ID = import.meta.env.VITE_KAKAO_TEMPLATE_KEY

export const shareHandlers = (shareUrl: string): Record<string, () => void> => {
  const baseUrlPattern = /^https?:\/\/catchletter.kr\//
  const baseUrl = shareUrl.replace(baseUrlPattern, '')

  return {
    Kakao: () => {
      if (!window.Kakao) {
        return
      }

      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(KAKAO_KEY)
      }

      if (window.Kakao.Share) {
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
      const xshareUrl = 'https://www.x.com/intent/tweet?text=' + shareUrl + '\n' + text
      window.open(xshareUrl)
    },
    Facebook: () => {
      const facebookShareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + shareUrl
      window.open(facebookShareUrl)
    },
    LINE: () => {
      const lineShareUrl = `https://social-plugins.line.me/lineit/share?url=${shareUrl}`
      window.open(lineShareUrl)
    },
  }
}
