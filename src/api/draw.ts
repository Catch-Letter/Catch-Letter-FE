import axios from 'axios'
import { apiClient } from '#/api/apiClient'
import { API_ENDPOINTS } from '#/api/apiEndpoints'

// Presigned URL 요청
export const requestDrawUpload = async (uuid: string, answer: string) => {
  try {
    const res = await apiClient.post(API_ENDPOINTS.DRAW(uuid), { answer })
    console.log('그림 정답 요청 성공', res.data.data)
    return res.data.data
  } catch (error) {
    console.log('그림 정답 요청 실패', error)
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
    console.log('이미지 업로드 성공:', response)
    return response
  } catch (error) {
    console.error('이미지 업로드 실패:', error)
    throw error
  }
}
