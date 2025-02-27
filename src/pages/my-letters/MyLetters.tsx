import { BackHeader } from '#/components'
import {
  MyLettersWrapper,
  TitleStyle,
  BadgeStyle,
  GridContainer,
  LetterCardStyle,
} from './MyLetters.styles'

const myLettersData = [
  {
    id: 1,
    recipient_id: 3,
    is_open: true,
    is_correct: false,
    created_at: '2025-02-23T08:42:40.629000Z',
    updated_at: '2025-02-23T08:42:52.062000Z',
    deleted_at: null,
    answer_length: 4,
    thumbnail_url: null,
  },
  {
    id: 2,
    recipient_id: 3,
    is_open: true,
    is_correct: true,
    created_at: '2025-02-23T08:42:40.629000Z',
    updated_at: '2025-02-23T08:42:52.062000Z',
    deleted_at: null,
    answer_length: 4,
    thumbnail_url: null,
  },
  {
    id: 3,
    recipient_id: 3,
    is_open: true,
    is_correct: false,
    created_at: '2025-02-23T08:42:40.629000Z',
    updated_at: '2025-02-23T08:42:52.062000Z',
    deleted_at: null,
    answer_length: 4,
    thumbnail_url: null,
  },
  {
    id: 4,
    recipient_id: 3,
    is_open: true,
    is_correct: false,
    created_at: '2025-02-23T08:42:40.629000Z',
    updated_at: '2025-02-23T08:42:52.062000Z',
    deleted_at: null,
    answer_length: 4,
    thumbnail_url: null,
  },
  {
    id: 5,
    recipient_id: 3,
    is_open: true,
    is_correct: false,
    created_at: '2025-02-23T08:42:40.629000Z',
    updated_at: '2025-02-23T08:42:52.062000Z',
    deleted_at: null,
    answer_length: 4,
    thumbnail_url: null,
  },
  {
    id: 6,
    recipient_id: 3,
    is_open: true,
    is_correct: false,
    created_at: '2025-02-23T08:42:40.629000Z',
    updated_at: '2025-02-23T08:42:52.062000Z',
    deleted_at: null,
    answer_length: 4,
    thumbnail_url: null,
  },
  {
    id: 7,
    recipient_id: 3,
    is_open: true,
    is_correct: true,
    created_at: '2025-02-23T08:42:40.629000Z',
    updated_at: '2025-02-23T08:42:52.062000Z',
    deleted_at: null,
    answer_length: 4,
    thumbnail_url: null,
  },
  {
    id: 8,
    recipient_id: 3,
    is_open: true,
    is_correct: true,
    created_at: '2025-02-23T08:42:40.629000Z',
    updated_at: '2025-02-23T08:42:52.062000Z',
    deleted_at: null,
    answer_length: 4,
    thumbnail_url: null,
  },
  {
    id: 9,
    recipient_id: 3,
    is_open: true,
    is_correct: false,
    created_at: '2025-02-23T08:42:40.629000Z',
    updated_at: '2025-02-23T08:42:52.062000Z',
    deleted_at: null,
    answer_length: 4,
    thumbnail_url: null,
  },
  {
    id: 10,
    recipient_id: 3,
    is_open: true,
    is_correct: true,
    created_at: '2025-02-23T08:42:40.629000Z',
    updated_at: '2025-02-23T08:42:52.062000Z',
    deleted_at: null,
    answer_length: 4,
    thumbnail_url: null,
  },
]

const MyLetters = () => {
  return (
    <div css={MyLettersWrapper}>
      <BackHeader
        Center={
          <div css={TitleStyle}>
            편지함
            <span css={BadgeStyle}>{myLettersData.length}</span>
          </div>
        }
      />

      <div css={GridContainer}>
        {myLettersData.map((letter) => (
          <div key={letter.id} css={LetterCardStyle}></div>
        ))}
      </div>
    </div>
  )
}

export default MyLetters
