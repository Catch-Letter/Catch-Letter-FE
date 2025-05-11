export const renderColorTranslation = (word: string, text: string, color: string) => {
  const regex = new RegExp(`(${word})`, 'gi')
  return text.split(regex).map((part, index) =>
    part.toLowerCase() === word.toLowerCase() ? (
      <span key={index} style={{ color }}>
        {part}
      </span>
    ) : (
      part
    )
  )
}
