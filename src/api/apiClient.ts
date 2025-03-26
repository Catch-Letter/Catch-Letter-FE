import { refreshAuthToken } from '#/api/refresh'
import { useAuthStore } from '#/store/authStore'
import axios, { CreateAxiosDefaults } from 'axios'

export const API_BASE_URL = import.meta.env.VITE_BASE_URL

const baseConfig: CreateAxiosDefaults = {
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
}

export const apiClient = axios.create(baseConfig)

// access-token이 필요한 요청들
export const authApiClient = axios.create(baseConfig)

authApiClient.interceptors.request.use(
  // store에 토큰이 있는 경우 요청에 토큰을 실어서 요청
  (config) => {
    const { accessToken } = useAuthStore.getState()
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`
    }

    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

authApiClient.interceptors.response.use(
  (response) => response,
  // 응답이 실패인 경우
  async (error) => {
    const originalRequest = error.config

    if (error.response?.status === 401 && !originalRequest._retry) {
      // 재귀 실행 방지
      originalRequest._retry = true

      const { setAccessToken, deleteAccessToken } = useAuthStore.getState()

      try {
        // 기존 토큰을 통해 refresh 시도
        const { access_token } = await refreshAuthToken()
        setAccessToken(access_token)

        originalRequest.headers.Authorization = `Bearer ${access_token}`
        return authApiClient(originalRequest)
      } catch (refreshError) {
        // refresh 시도 후에도 실패인 경우
        console.error('토큰 갱신 실패', refreshError)
        deleteAccessToken()
        return Promise.reject(refreshError)
      }
    }

    return Promise.reject(error)
  }
)
