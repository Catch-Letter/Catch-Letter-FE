import { apiClient } from '#/api/apiClient'
import { API_ENDPOINTS } from '#/api/apiEndpoints'

export const fetchCreatePost = async (name: string, password: string) => {
  try {
    const res = await apiClient.post<Response>(API_ENDPOINTS.CREATE, {
      name,
      password,
    })
    return res.data
  } catch (error) {
    console.error('failed to create post', error)
    throw error
  }
}

interface Response {
  result: 'success'
  data: {
    url: string
    uuid: string
    expired_at: string // Zulu Time
  }
}
