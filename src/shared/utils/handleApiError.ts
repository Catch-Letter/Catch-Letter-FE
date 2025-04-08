import axios from 'axios'

export const handleApiError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    const status = error.response?.status

    if ([404, 403, 422].includes(status ?? 0)) {
      const notFoundError = new Error('NotFound')
      notFoundError.name = 'NotFound'
      throw notFoundError
    }
  }

  throw error
}
