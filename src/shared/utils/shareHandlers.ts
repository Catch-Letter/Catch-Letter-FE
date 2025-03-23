const KAKAO_KEY = import.meta.env.VITE_KAKAO_KEY
const KAKAO_ID = import.meta.env.VITE_KAKAO_TEMPLATE_KEY

export const shareHandlers = (shareUrl: string): Record<string, () => void> => ({
  Kakao: () => {
    if (!window.Kakao) {
      return
    }

    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(KAKAO_KEY)
    }

    if (window.Kakao.Share && window.Kakao.Share.sendScrap) {
      window.Kakao.Share.sendCustom({
        templateArgs: {
          url: shareUrl,
        },
        templateId: Number(KAKAO_ID),
        installTalk: true, // 카카오톡 미설치 시 설치페이지로 이동
      })
    }
  },
})
