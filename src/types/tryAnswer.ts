export interface TryAnswerResponse {
  success: boolean
  message: string
  remaining_seconds?: number | null
  remainingAttempts?: number
  hints?: { index: number; value: string }[]
}
