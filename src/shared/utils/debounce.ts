function debounce(task: any, duration: number = 500) {
  let timer: number | undefined

  return (...args: unknown[]) => {
    clearTimeout(timer)
    timer = setTimeout(() => task(...args), duration)
  }
}

export default debounce
