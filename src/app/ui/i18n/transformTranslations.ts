import { LANGUAGE } from '#/app/config'

export function transformTranslations(json: Record<string, any>) {
  const result: Record<string, any> = {}
  for (const LAN in LANGUAGE) {
    result[LANGUAGE[LAN as keyof typeof LANGUAGE]] = { translation: {} }
  }

  const depthStack: string[] = []

  dfs(json, depthStack)

  return result

  function dfs(obj: Record<string, any>, depthStack: string[]) {
    if (isLeaf(obj)) {
      for (const LAN in LANGUAGE) {
        const translated = obj[LAN]

        let res = result[LANGUAGE[LAN as keyof typeof LANGUAGE]]['translation']
        for (let i = 0; i < depthStack.length - 1; i++) {
          const depth = depthStack[i]
          if (!res[depth]) res[depth] = {}
          res = res[depth]
        }
        res[depthStack[depthStack.length - 1]] = translated
      }

      return
    }

    for (const key in obj) {
      depthStack.push(key)
      dfs(obj[key], depthStack)
      depthStack.pop()
    }
  }
}

function isLeaf(obj: Record<string, string>) {
  for (const key in obj) {
    const child = obj[key]
    if (Array.isArray(child)) return true
    if (!(key in LANGUAGE) || typeof child !== 'string') return false
  }
  return true
}
