// 편지 보관함 페이지 API 응답 타입

export interface LetterData {
  id: number
  recipient_id: number
  is_open: boolean
  is_correct: boolean
  created_at: string
  updated_at: string
  deleted_at: string | null
  answer_length: number
  thumbnail_url: string | null
  letter: {
    etc: string
  }
}

export interface LettersResponse {
  data: LetterData[]
  path: string
  per_page: number
  next_cursor: string | null
  next_page_url: string | null
  prev_cursor: string | null
  prev_page_url: string | null
}
