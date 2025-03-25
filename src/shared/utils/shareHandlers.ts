const KAKAO_KEY = import.meta.env.VITE_KAKAO_KEY
const LINE_KEY = import.meta.env.VITE_LINE_KEY
const KAKAO_ID = import.meta.env.VITE_KAKAO_TEMPLATE_KEY

export const shareHandlers = (shareUrl: string): Record<string, () => void> => {
  const baseUrlPattern = /^https?:\/\/localhost:5173\//
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
      window.open('https://www.x.com/intent/tweet?text=' + shareUrl + '\n' + text)
    },
    Facebook: () => {
      window.open('https://www.facebook.com/sharer/sharer.php?u=' + shareUrl)
    },
    LINE: () => {
      const lineShareUrl = `https://social-plugins.line.me/lineit/share?url=${shareUrl}`

      window.open(lineShareUrl)

      // if (!window.liff) {
      //   console.log(window.liff)
      //   return
      // }
      // try {
      //   await window.liff.init({ liffId: LINE_KEY })
      //   console.log('LIFF 실행 환경:', window.liff.getContext())
      //   console.log('LIFF API 가능 여부:', window.liff.isApiAvailable('shareTargetPicker'))
      //   if (!window.liff.isInClient()) {
      //     alert('LINE 앱 내에서 실행해야 공유 기능을 사용할 수 있습니다.')
      //     window.location.href = `https://liff.line.me/R/app/${LINE_KEY}/?redirect=https://c993-210-204-240-136.ngrok-free.app/inbox/77e26c77-4dfb-42bb-89b3-515c84c5f483`
      //     return
      //   }
      //   await window.liff.shareTargetPicker([
      //     {
      //       type: 'text',
      //       text: `이 링크를 확인해 봐! 👉 ${shareUrl}`,
      //     },
      //   ])
      // } catch (error) {
      //   console.error('failed to initalized liff', error)
      // }
    },
  }
}
