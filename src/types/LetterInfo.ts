export interface LetterInfo {
  to: string
  from: string
  contents: string
  etc: string
}

export interface LetterResponse {
  data: {
    id: number
    image_id: number
    to: string
    from: string
    contents: string
    etc: string
    created_at: string
    updated_at: string
    deleted_at: string | null
  }
}
