export const extractRemainingChances = (message: string | null): string => {
  return message?.match(/\d+/)?.[0] || '0'
}
export default extractRemainingChances
