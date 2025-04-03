import axios from 'axios'
import { apiClient } from '#/api/apiClient'
import { API_ENDPOINTS } from '#/api/apiEndpoints'

// Presigned URL 요청
export const requestDrawUpload = async (uuid: string, answer: string) => {
  try {
    const res = await apiClient.post(API_ENDPOINTS.DRAW(uuid), { answer })
    return res.data.data
  } catch (error) {
    throw error
  }
}

// 그림 원본 이미지 업로드
export const uploadImageToPresignedUrl = async (presignedUrl: string, file: File) => {
  try {
    const response = await axios.put(presignedUrl, file, {
      headers: {
        'Content-Type': file.type,
      },
    })
    return response
  } catch (error) {
    throw error
  }
}
