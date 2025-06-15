import { useQueryClient, type InfiniteData } from '@tanstack/react-query'
import type { LetterData, LettersResponse } from '#/types/myLetters'

const useUpdateLetter = () => {
  const queryClient = useQueryClient()

  const update = (uuid: string, letterId: number) => {
    queryClient.setQueryData<InfiniteData<LettersResponse>>(['myLetters', uuid], (oldData) => {
      if (!oldData) return oldData

      return {
        ...oldData,
        pages: oldData.pages.map((page) => ({
          ...page,
          data: page.data.map((letter: LetterData) =>
            letter.id === Number(letterId) ? { ...letter, is_correct: true } : letter
          ),
        })),
      }
    })
  }

  return update
}

export default useUpdateLetter
